import React from "react";
import { Row, Col } from "reactstrap";
import Product from "../product/Product";
import { connect } from "react-redux";

const ProductList = (props) => {
  console.log(props.products);

  return (
    <Row className="mt-4">
      {props.products.map((p) => {
        return (
          <Col key={p.id} lg={4}>
            <Product
              product={p}
            />
          </Col>
        );
      })}
    </Row>
  );
};

function mapStateToProps(state) {
  return {
    products: state.app.products,
  };
}

export default connect(mapStateToProps)(ProductList);
