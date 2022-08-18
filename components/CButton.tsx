interface IButtonProps {
  label: string;
  onClick: () => void;
}
/**
 * 通用非业务基础组件
 * @param param0
 * @returns
 */
export default function Button({ label, onClick }: IButtonProps) {
  return <button onClick={() => onClick()}>{label}</button>;
}
