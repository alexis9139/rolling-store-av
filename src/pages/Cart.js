import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import ProductCard from '../components/ProductCard'
import CartDetails from '../components/CartDetails'
const { Content } = Layout;

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {},
      address: ''
    }
  }

  componentDidMount() {
    const { product } = this.props.location.state
    this.props.updateCart(product)
  }

  render() {
    const { product } = this.props.location.state
    const { updateCart } = this.props

    return(
      <Layout>
        <Content className="content">
          <p> Mi carrito </p>
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <ProductCard key={product.id} product={product} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <CartDetails product={product} updateCart={updateCart} />
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}