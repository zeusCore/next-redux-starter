const withPlugins = require("next-compose-plugins");
const withCSS = require("./build-tools/next-css");
const withLess = require("./build-tools/next-less");
const hasha = require("hasha");
const path = require("path");

const LessPluginFunctions = require("less-plugin-functions");
const withTM = require("next-transpile-modules")(["antd"]);

const config = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts", "page.js", "page.jsx"],

  async rewrites() {
    const isDevelopment = process.env.NODE_ENV === "development";
    return [];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  publicRuntimeConfig: {},
  images: {
    disableStaticImages: true,
  },
  cssModules: {
    getLocalIdent: ({ resourcePath }, localIdentName, localName) => {
      if (
        /\.global\.(css|less)$/.test(resourcePath) ||
        /node_modules/.test(resourcePath)
      ) {
        return localName;
      }
      return `${localName}__${hasha(resourcePath + localName, {
        algorithm: "md5",
      }).slice(0, 8)}`;
    },
  },
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "ant-prefix": "ant",
      },
      plugins: [new LessPluginFunctions({ alwaysOverride: true })],
    },
  },
  webpack(config) {
    config.resolve.alias.react = path.resolve(
      __dirname,
      "./node_modules/react"
    );
    config.resolve.alias["react-dom"] = path.resolve(
      __dirname,
      "./node_modules/react-dom"
    );
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: /\.(js|ts)x|less|css?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]",
          },
        },
      }
    );

    return config;
  },
};

module.exports = withPlugins([withTM, withCSS, withLess], config);
