import React from "react";
import { Badge, Col } from "antd";
//import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperText,
  WrapperHeaderCart,
} from "./style";
import {
  UserAddOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
  TaobaoCircleOutlined,
} from "@ant-design/icons";

import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperText>
            <TaobaoCircleOutlined
              style={{ fontSize: `50px`, color: `pink  ` }}
            />
          </WrapperText>
        </Col>

        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm Kiếm "
            placeholder="input search text"
          />
        </Col>
        <Col span={6} style={{ display: `flex`, gap: `20px` }}>
          <WrapperHeaderAccount>
            <UserAddOutlined style={{ fontSize: `30px` }} />
            <div>
              <span>Đăng nhập / Đăng ký</span>
            </div>
            <span>Tài khoản</span>
            <CaretDownOutlined />
          </WrapperHeaderAccount>
          <WrapperHeaderCart>
            <Badge count={12}>
              <ShoppingCartOutlined style={{ fontSize: `40px` }} />
            </Badge>

            <span>Giỏ Hàng</span>
          </WrapperHeaderCart>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
