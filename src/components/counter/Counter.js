import React from 'react';
import { Button, Input } from 'reactstrap';

export default props => {
    return (
        <div className='d-flex align-items-center'>
        <Button color='danger' className='m-2' onClick={props.dec}> - </Button>
        <Input min='1' max='10' type="number" value={props.count}/>
        <Button color='success' className='m-2' onClick={props.inc}> + </Button>
        </div>
    );
}