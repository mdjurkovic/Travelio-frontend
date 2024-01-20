import { Tooltip } from "antd";

const TooltipComponent = ({ children, title }) => (
  <Tooltip title={title}>{children}</Tooltip>
);

export default TooltipComponent;
