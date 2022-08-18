import { useAppSelector } from "redux/hook";
import "./header.less";

export default function Header() {
  const { username, isLogined } = useAppSelector((state) => state.login);
  return (
    <header>
      {username} {isLogined ? "已登录" : "请登录"}
    </header>
  );
}
