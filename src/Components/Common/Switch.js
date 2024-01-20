import { Switch } from "antd";

const SwitchComponent = ({ onChange, checked }) => (
  <Switch onChange={onChange} checked={checked} />
);

export default SwitchComponent;
