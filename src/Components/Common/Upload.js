import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Upload from "antd/es/upload/Upload";

const UploadComponent = ({
  beforeUpload,
  maxCount = 1,
  showUploadList = true,
}) => (
  <Upload
    name="cover"
    beforeUpload={beforeUpload}
    showUploadList={showUploadList}
    maxCount={maxCount}
  >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);

export default UploadComponent;
