import React from "react";
import { Row, Col } from "reactstrap";
import Product from "../product/Product";

export default (props) => {
  return (
    <Row className='mt-4'>
      <Col lg={4} >
        <Product title="Product 1" description="Description" price={100}  count={5}/>
      </Col>
    </Row>
  );
};
