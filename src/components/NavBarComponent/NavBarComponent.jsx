import React from "react";
import { Checkbox, Rate } from "antd"; // Import Checkbox, Row, Col from antd
import { WrapperlableText, WrapperTextValue, WrapperContent } from "./Style";

const NavBarComponent = () => {
  const onChange = (onChange) => {};

  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => (
          <WrapperTextValue key={option}>{option}</WrapperTextValue>
        ));
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((options) => {
              return <Checkbox value={options.value}>{options.label}</Checkbox>;
            })}
            <Checkbox value="B">B</Checkbox>
          </Checkbox.Group>
        );
      case "star":
        return options.map((options) => {
          return (
            <div style={{ display: "flex", gap: "4px" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={options}
              />
              <span>{`Từ ${options} Sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((options) => {
          return (
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#ccc",
                width: "fit-content",
                padding: "6px",
              }}
            >
              {options}
            </div>
          );
        });

      default:
        return {};
    }
  };

  return (
    <div style={{ marginLeft: "6%" }}>
      <WrapperlableText>
        <h1>Danh Sách</h1>
      </WrapperlableText>

      <WrapperContent>
        {renderContent("text", ["tu lanh", "ti vi", "may  giat"])}
      </WrapperContent>

      {/* <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>

      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>

      <WrapperContent>
        {renderContent("price", ["Duoi 40", "Tren 50000"])}
      </WrapperContent> */}
    </div>
  );
};

export default NavBarComponent;
