import React from "react";
import imageproduct from "../../assets/images/productdetail.webp";
import imageproductsmall from "../../assets/images/productsmall.webp";
import ButtonComponent from "../ButttonComponent/ButttonComponent";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import {
  WrapperStyleImageSmall,
  WrapperStyleNameproduct,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
} from "./style";
import { Row, Col, Image } from "antd";
import { StarFilled } from "@ant-design/icons";

const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", background: "#fff" }}>
      <Col span={10}>
        <Image src={imageproduct} alt="image-product" preview={false} />
        <Row gutter={[16, 16]} style={{ paddingTop: "10px" }}>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="product-small"
              preview={false}
            />
          </Col>
          <Col
            span={4}
            style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
          >
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="product-small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="product-small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="product-small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="product-small"
              preview={false}
            />
          </Col>
          <Col span={4}>
            <WrapperStyleImageSmall
              src={imageproductsmall}
              alt="product-small"
              preview={false}
            />
          </Col>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameproduct>
          <h5>
            Điện Thoại Itel S23 128GB/16GB (8GB+8GB) | Pin 5000mAh | 6.6 Inch |
            Camera 50MP | 90Hz | Face ID - Hàng chính Hãng
          </h5>
        </WrapperStyleNameproduct>

        <div>
          <StarFilled
            style={{ fontSiz: "10px", color: "red", margin: "5px" }}
          />
          <StarFilled
            style={{ fontSiz: "10px", color: "red", margin: "5px" }}
          />
          <StarFilled
            style={{ fontSiz: "10px", color: "red", margin: "5px" }}
          />{" "}
          <StarFilled
            style={{ fontSiz: "10px", color: "red", margin: "5px" }}
          />
          <StarFilled
            style={{ fontSiz: "10px", color: "red", margin: "5px" }}
          />
          <span style={{ margin: "5px", fontSize: "20px  " }}>
            | Đã Bán 1000
          </span>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>
            2.524.000<sup>đ </sup>
            <span style={{ fontSize: "15px" }}>-2%</span>
          </WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span> Giao đến</span>
          <span className="address">Q. 1, P. Bến Nghé, Hồ Chí Minh</span>-
          <span className="change-address">Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div
          style={{
            margin: "10px 0 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: "flex", aliggItems: "center", gap: "12px" }}>
          <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              height: "48px",
              width: "220px",
              border: "none",
              borderRadius: "4px",
            }}
            textButton={"Chọn mua"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13, 92, 182)",
              borderRadius: "4px",
            }}
            textButton={"Mua trả sau"}
            styleTextButton={{ color: "rgb(13, 92, 182)", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
