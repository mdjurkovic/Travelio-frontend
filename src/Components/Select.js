import { Select } from "antd";

const SelectComponent = ({
  children,
  placeholder,
  mode = "default",
  showSearch = true,
}) => (
  <Select placeholder={placeholder} showSearch={showSearch} mode={mode}>
    {children}
  </Select>
);

export default SelectComponent;
