import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Pagination, Row } from "antd";
import { WrapperProducts, WrapperNavBar } from "./Style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "20px",
        }}
      >
        <WrapperNavBar span={4}>
          <NavBarComponent />
        </WrapperNavBar>
        <div span={20}>
          <WrapperProducts>
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
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination
            defaultCurrent={2}
            total={500}
            onChange={onChange}
            style={{ textAlign: "center", marginTop: "10px" }}
          />
        </div>
      </Row>
    </div>
  );
};

export default TypeProductPage;
