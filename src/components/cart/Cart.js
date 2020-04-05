import React from 'react';
import { Table } from 'reactstrap';
import Counter from '../counter/Counter';

export default props => {
    return (
        <Table bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Produc description</th>
          <th>Price</th>
          <th style={{width:'200px'}}>Count</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <th className='align-middle' scope="row">1</th>
          <td className='align-middle' >Product 1</td>
          <td className='align-middle' >$100</td>
          <td className='align-middle' ><Counter count={3}/></td>
          <td className='align-middle' >$300</td>
        </tr>
      </tbody>
    </Table>
    );
}