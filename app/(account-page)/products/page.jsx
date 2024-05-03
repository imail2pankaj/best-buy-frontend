import { createClient } from '@/utils/supabase/server'
import Link from 'next/link';
import React from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'

const Products = async () => {

  const supabase = createClient();

  const { data, error } = await supabase
    .from('Products')
    .select(`
  *,
  Brands (
    name 
  )
`);


  return (
    <Container>
      <Card className='p-4 mb-4'>
        <Row>
          <Col><h3>Products</h3></Col>
          <Col className='text-end'><Link href={`/products/create`} >Create</Link></Col>
        </Row>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Selling Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.model}</td>
                <td>{row.Brands.name}</td>
                <td>{row.price}</td>
                <td>{row.sale_price}</td>
                <td><Link href={`/products/${row.id}/edit`}>Edit</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  )
}

export default Products