import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  CartButton,
  CartButtonText,
  CartPricing,
  CartTotalPrice,
  Container
} from './styles';

import formatValue from '../../utils/formatValue';

export default function FloatingCart() {
  const navigation = useNavigation();

  const products = useSelector(({ cart }) => cart);
  // console.log(products)

  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((acc, product) => {
      const totalPrice = acc + product.amount * product.price;
      return totalPrice;
    }, 0);
    return formatValue(cartAmount);
  })

  return (
    <Container>
      <CartButton
        onPress={() => navigation.navigate('cart')}
      >
        <FeatherIcon name='shopping-cart' size={24} color='#f3f9ff'/>
        <CartButtonText>
          {cartSize} {cartSize === 1 ? 'item' : 'itens'}
        </CartButtonText>

        <CartPricing>
          <CartTotalPrice>{cartTotal}</CartTotalPrice>
        </CartPricing>

        <FeatherIcon name='chevron-right' size={24} color='#f3f9ff'/>
      </CartButton>
    </Container>
  );
};