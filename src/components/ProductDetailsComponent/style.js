// style.js
import styled from "styled-components";
import { Image, InputNumber } from "antd";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px;
  width: 64px;
`;

export const WrapperStyleColImage = styled(Image)`
  flex-basis: unset;
`;

export const WrapperStyleNameproduct = styled.h1`
  color: rgb(36, 36, 36);
  font-size: 30px;
  font-weight: 300;
  line-height: 32px;
  word-break: break-word;
`;

export const WrapperPriceProduct = styled.div`
  background: rgb(250, 250, 250);
  border-radius: 4px;
`;

export const WrapperPriceTextProduct = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  padding: 10px;
  margin-top: 10px;
`;

export const WrapperAddressProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 10px;
  }

  span.change-address {
    color: rgb(10, 104, 255);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    flex: 1 1 0%;
    cursor: pointer;
  }
`;
export const WrapperQualityProduct = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 120px;
  border: 1px solid #ccc;
`;
export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 60px;
    border-top: none;
    border-bottom: none;
    &.ant-input-number-handler-wrap {
      display: none !important;
    }
  }
`;
