import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons"; // Import icon

import React from "react";

const ButtonComponent = ({
  size,
  backgroundColorButton,
  textButton,
  ...rest
}) => {
  return (
    <Button
      size={size}
      type="primary"
      style={{ backgroundColor: backgroundColorButton }}
      icon={<SearchOutlined {...rest} />}
    >
      {textButton}
    </Button>
  );
};

export default ButtonComponent;
