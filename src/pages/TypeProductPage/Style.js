import styled from "styled-components";
import { Col } from "antd";

export const WrapperProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px;
`;

export const WrapperNavBar = styled(Col)`
  background: #fff;
  margin-right: 10px;
  padding: 10px;
  height: fit-content;
`;
