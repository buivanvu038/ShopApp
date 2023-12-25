import React from "react";
import { WrapperReporText, WrapperPricText, WrapperCardStyle } from "./Style";

import { StarFilled } from "@ant-design/icons";
const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 250 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <styleNameProduct>Iphone </styleNameProduct>
      <WrapperReporText>
        <sapn>
          <span>4.6</span>
          <StarFilled
            style={{ fontSiz: "10px", color: "red", margin: "5px" }}
          />
        </sapn>
        <span style={{ margin: "5px" }}> | Đã Bán 1000</span>
      </WrapperReporText>
      <WrapperPricText>
        19.000.000<sup>đ </sup>
        <span style={{ fontSize: "15px" }}>-2%</span>
      </WrapperPricText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
