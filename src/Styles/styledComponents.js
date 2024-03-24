import styled, {css} from "styled-components";
import {Form} from "antd";

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

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexAround = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FlexEvenly = css`
  display: flex;
  justify-content: evenly;
  align-items: center;
`;

export {ModalHeader, ModalForm, ModalFormItem, FlexCenter, FlexBetween, FlexAround, FlexEvenly};
