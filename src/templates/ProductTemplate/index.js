import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';
import React from 'react';
import { Grid } from './styles';

// This query will be executed by Gatsby on page load, and the result be injected into props
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
      shopifyId
      productType
    }
  }
`;

const ProductTemplate = props => {
  return (
    <Layout>
      <Grid>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
        </div>
        <div>image</div>
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;
