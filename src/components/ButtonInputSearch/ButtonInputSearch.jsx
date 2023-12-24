import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButttonComponent from "../ButttonComponent/ButttonComponent";
const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    backgroundColorInput = `#ffa`,
    backgroundColorButton,
  } = props;
  return (
    <div style={{ display: `flex`, alignItems: "center" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        style={{ backgroundColor: backgroundColorInput }}
      />
      <ButttonComponent
        size={size}
        type="primary"
        style={{ backgroundColor: backgroundColorButton }}
        icon={<SearchOutlined />}
        textButton={textButton}
      ></ButttonComponent>
    </div>
  );
};

export default ButtonInputSearch;
