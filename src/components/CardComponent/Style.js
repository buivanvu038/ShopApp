import styled from "styled-components";
import { Card } from "antd";
export const WrapperCardStyle = styled(Card)`
  width: 200px;
  & img {
    height: 250px;
    width: 250px;
  }
`;
export const styleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgb(56, 56, 61);
`;
export const WrapperReporText = styled.div`
font-size:  11px,
color:rgb(128,128,137);
display:flex;
align-items:center;
`;
export const WrapperPricText = styled.div`
  color: rgb(255, 66, 78);
  font-size: 20px;
  font-weight: 500;
`;
