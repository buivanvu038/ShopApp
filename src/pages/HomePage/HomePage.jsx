import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./Style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import anh1 from "../../assets/images/anh1.jpeg";
import anh2 from "../../assets/images/anh2.jpeg";
import anh3 from "../../assets/images/anh3.jpeg";
//import { styled } from "styled-components";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Button } from "antd";
import NavBarComponent from "./../../components/NavBarComponent/NavBarComponent";
//import ButtonComponent from "./../../components/ButttonComponent/ButttonComponent";
export const HomePage = () => {
  const arr = ["TV", "Tủ lạnh", "Laptop"];
  return (
    <>
      <WrapperTypeProduct>
        {arr.map((item) => (
          <TypeProduct name={item} key={item} />
        ))}
      </WrapperTypeProduct>
      <div style={{ textAlign: "center" }}>
        <SliderComponent arrImages={[anh1, anh2, anh3]} />
      </div>

      <div
        style={{
          margin: "30px",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          flexWrap: "wrap",
          marginLeft: "6%  ",
        }}
      >
        <CardComponent />
        <CardComponent />

        <CardComponent />

        <CardComponent />

        <CardComponent />

        <CardComponent />

        <CardComponent />
        <CardComponent />

        <CardComponent />

        <CardComponent />

        <CardComponent />
        <CardComponent />
      </div>
      <div style={{ width: "100px", display: "flex", marginLeft: "50%" }}>
        <Button style={{ color: "black", backgroundColor: "pink" }}>
          XEM THÊM{" "}
        </Button>
      </div>
      <NavBarComponent></NavBarComponent>
    </>
  );
};
