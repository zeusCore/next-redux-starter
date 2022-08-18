import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import { Formik } from "formik";
import Link from "next/link";
import { loginValidate } from "redux/actions/loginActions";
import { useAppDispatch } from "redux/hook";
import * as Yup from "yup";
import style from "./login.less";

const LoginSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default function Login() {
  const dispatch = useAppDispatch();

  const onLogin = async (values, { setSubmitting, setErrors }: any) => {
    setSubmitting(true);
    try {
      const { username, password } = values;
      dispatch(loginValidate(username, password));
    } catch (e) {
      throw e;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{}}
      onSubmit={onLogin}
      validationSchema={LoginSchema}
    >
      {({ handleSubmit, values, handleChange, errors, isSubmitting }: any) => (
        <Form className={style("login-form")} onFinish={handleSubmit}>
          <h2>登录</h2>
          <Form.Item
            name="username"
            validateStatus={errors.username ? "error" : "success"}
            help={errors.username}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="用户名 or Email"
              value={values.username}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            validateStatus={errors.password ? "error" : "success"}
            help={errors.password}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
              value={values.password}
              onChange={handleChange}
            />
          </Form.Item>
          {errors.global && (
            <Form.Item>
              <Alert message={errors.global} type="error" />
            </Form.Item>
          )}
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>保持登录</Checkbox>
            </Form.Item>

            <Link href="/password-reset">
              <a className={"login-form-forgot"} href="/password-reset">
                忘记密码
              </a>
            </Link>
          </Form.Item>
          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
            >
              登录
            </Button>
            <Link href="/register">
              <a href="/register">注册</a>
            </Link>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
}
