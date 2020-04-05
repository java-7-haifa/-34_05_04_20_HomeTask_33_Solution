import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import Counter from "../counter/Counter";
import { connect } from "react-redux";

const Product = (props) => {
  let count = 0;

  function getCount(pid, cart){
    let p = cart.find(p => p.id === pid);
    if(p){
      count = p.count;
      return p.count;
    }
    return 0;
  }

  return (
    <>
      <Card className="mb-4">
        <CardBody className="text-center">
          <CardTitle>{props.product.title}</CardTitle>
          <CardSubtitle>{props.product.description}</CardSubtitle>
          <CardSubtitle>$ {props.product.price}</CardSubtitle>
          { getCount(props.product.id, props.cartProducts) ? (
            <Counter count={count} 
            inc={()=> props.inc(props.product.id)}
            dec={()=>props.dec(props.product.id)}/>
          ) : (
            <Button color="success" className="w-100" onClick={()=> props.add(props.product)}>
              Add to card
            </Button>
          )}
        </CardBody>
      </Card>
    </>
  );
};

function mapSateToPros(state) {
  return {
    cartProducts: state.cart.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (p) => dispatch({ type: "ADD_PROD", product: p }),
    inc: (pid) => dispatch({ type: "INC_PROD", pid }),
    dec: pid => dispatch({type:'DEC_PROD',pid})
  };
}
export default connect(mapSateToPros, mapDispatchToProps)(Product);
