import { Layout } from 'components/Layout';
import { graphql } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import ImageGallery from '../../components/ImageGallery';
import CartContext from '../../context/CartContext';
import { Grid, SelectWrapper, Price } from './styles';

// This query will be executed by Gatsby on page load, and the result be injected into props
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const ProductTemplate = props => {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(result.variants[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data.shopifyProduct.shopifyId, setProduct]);

  const handleVariantChange = e => {
    setSelectedVariant(product?.variants.find(v => v.id === e.target.value));
  };

  return (
    <Layout>
      <Grid>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description}</p>
          {product?.availableForSale && (
            <>
              {product?.variants.length && (
                <SelectWrapper>
                  <strong>Variant</strong>
                  {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                  <select onChange={handleVariantChange}>
                    {product.variants.map(v => (
                      <option key={v.id} value={v.id}>
                        {v.title}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              )}
              {!!selectedVariant && <Price>${selectedVariant.price}</Price>}
            </>
          )}
        </div>
        <div>
          <ImageGallery images={props.data.shopifyProduct.images} />
        </div>
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;
