// Trong file style.js
import { Row } from "antd";
import styled from "styled-components";

// Chú ý: Viết hoa chữ cái đầu tiên cho tên của styled component
export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
`;
export const WrapperText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: pink;
  gap: 10px;
  fontsize: 12px;
  margin-bottom: 12px;
`;
export const WrapperHeaderCart = styled.div`
  color: pink;
  margin-bottom: 12px;
`;
