import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Counter from "../counter/Counter";
export default (props) => {
  return (
    <>
      <Card>
        <CardBody className='text-center'>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.description}</CardSubtitle>
          <CardSubtitle>$ {props.price}</CardSubtitle>
          {props.count ? (
            <Counter count={props.count} />
          ) : (
            <Button color="success" className='w-100'>Add to card</Button>
          )}
        </CardBody>
      </Card>
    </>
  );
};
