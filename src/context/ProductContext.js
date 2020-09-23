import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  {
    allShopifyCollection(sort: { order: ASC, fields: title }) {
      edges {
        node {
          title
          products {
            ...ShopifyProductFields
          }
          title
          description
          shopifyId
          image {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allShopifyCollection } = useStaticQuery(query);
  return (
    <ProductContext.Provider
      value={{
        products: [],
        collections: allShopifyCollection.edges.map(({ node }) => node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
