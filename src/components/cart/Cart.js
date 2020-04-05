import React from "react";
import { Table } from "reactstrap";
import Counter from "../counter/Counter";
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <Table bordered className="mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Product description</th>
          <th>Price</th>
          <th style={{ width: "200px" }}>Count</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((p, i) => {
          return (
            <tr key={p.id}>
              <th className="align-middle" scope="row">
                {i + 1}
              </th>
              <td className="align-middle">{p.title}</td>
              <td className="align-middle">${p.price}</td>
              <td className="align-middle">
                <Counter
                  count={p.count}
                  inc={() => props.inc(p.id)}
                  dec={() => props.dec(p.id)}
                />
              </td>
              <td className="align-middle">{p.count * p.price}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

function mapSateToProps(state) {
  return {
    products: state.cart.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: (pid) => dispatch({ type: "INC_PROD", pid }),
    dec: (pid) => dispatch({ type: "DEC_PROD", pid }),
  };
}
export default connect(mapSateToProps, mapDispatchToProps)(Cart);
