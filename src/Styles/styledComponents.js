import styled from "styled-components";
import { Form } from "antd";

const ModalHeader = styled.h3`
  text-align: center;
`;

const ModalForm = styled(Form)`
  text-align-last: start;
  margin: 24px 0;
`;

const ModalFormItem = styled(Form.Item)`
  > div > div > div {
    margin-left: 16px;
  }
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { ModalHeader, ModalForm, ModalFormItem, FlexCenter, FlexBetween };
