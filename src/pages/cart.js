import React from 'react';
import CartContent from '../components/CartContent';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

const Cart = () => {
  return (
    <Layout>
      <SEO title="Madhatter Cart" description="Madhatter store Cart" />
      <CartContent />
    </Layout>
  );
};

export default Cart;
