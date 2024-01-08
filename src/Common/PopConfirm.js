import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";

const PopConfirm = ({ children, handleDelete, message }) => (
  <Popconfirm
    title="Confirm delete"
    description={`Are you sure to delete this ${message}?`}
    onConfirm={handleDelete}
    icon={
      <QuestionCircleOutlined
        style={{
          color: "red",
        }}
      />
    }
  >
    {children}
  </Popconfirm>
);

export default PopConfirm;
