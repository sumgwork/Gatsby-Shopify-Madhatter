import { navigate, useLocation } from '@reach/router';
import ImageGallery from 'components/ImageGallery';
import { Layout } from 'components/Layout';
import ProductQuantityAdder from 'components/ProductQuantityAdder';
import { Button } from 'components/Button';
import { graphql } from 'gatsby';
import queryString from 'query-string';
import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import { Grid, Price, SelectWrapper } from './styles';
import { SEO } from 'components/SEO';
// This query will be executed by Gatsby on page load, and the result be injected into props
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      ...ShopifyProductFields
    }
  }
`;

const ProductTemplate = props => {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;

  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.data.shopifyProduct.shopifyId, setProduct, variantId]);

  const handleVariantChange = e => {
    const newVariant = product?.variants.find(v => v.id === e.target.value);
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <Layout>
      <SEO
        title={props.data.shopifyProduct.title}
        description={props.data.shopifyProduct.description}
      />
      <Button onClick={() => navigate(-1)}>Back to products</Button>
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
                  <select
                    onChange={handleVariantChange}
                    value={selectedVariant?.id}
                  >
                    {product.variants.map(v => (
                      <option key={v.id} value={v.id}>
                        {v.title}
                      </option>
                    ))}
                  </select>
                </SelectWrapper>
              )}
              {!!selectedVariant && (
                <>
                  <Price>${selectedVariant.price}</Price>
                  <ProductQuantityAdder
                    variantId={selectedVariant.id}
                    available={selectedVariant.available}
                  />
                </>
              )}
            </>
          )}
        </div>
        <div>
          <ImageGallery
            images={props.data.shopifyProduct.images}
            selectedVariantImageId={selectedVariant?.image.id}
          />
        </div>
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;
