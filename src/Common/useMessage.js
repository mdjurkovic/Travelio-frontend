import { message } from "antd";

const useMessage = ({ key }) => {
  const [messageApi, contextHolder] = message.useMessage({
    key,
  });
  const defaultSuccess = "Success";
  const defaultError = "Error";

  const success = (message = defaultSuccess) => {
    if (typeof message !== "string") message = defaultSuccess;

    messageApi
      .open({
        type: "success",
        content: message,
        key: message,
      })
      .then(() => messageApi.destroy());
  };

  const error = (message = defaultError) => {
    if (typeof message !== "string") message = defaultError;
    messageApi
      .open({
        type: "error",
        content: message,
        key: message,
      })
      .then(() => () => messageApi.destroy());
  };

  return { contextHolder, error, success };
};

export default useMessage;
