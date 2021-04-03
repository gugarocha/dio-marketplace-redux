import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as CartActions from '../../store/modules/cart/actions';

import FloatingCart from '../../components/FloatingCart';
import {
  Container,
  PriceContainer,
  Product,
  ProductButton,
  ProductButtonText,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductTitle
} from './styles';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

export default function Catalog() {
  const dispacth = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');
      setProducts(data);
    };

    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispacth(CartActions.addToCartRequest(id));
  };

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={ <View /> }
          ListFooterComponentStyle={{ height: 80 }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }}/>
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>
                  {formatValue(item.price)}
                </ProductPrice>
                <ProductButton onPress={() => handleAddToCart(item.id)}>
                  <ProductButtonText>Adicionar</ProductButtonText>
                  <FeatherIcon size={30} name='plus-circle' color='#d1d7e9' />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>

      <FloatingCart />
    </Container>
  );
};