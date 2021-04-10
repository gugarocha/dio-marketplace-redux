import React from 'react';
import LottieView from 'lottie-react-native';

import { Container, EmptyCartContainer, EmptyCartText } from './styles';

import EmptyCartAnimation from '../../../EmptyCartAnimation.json';

export default function EmptyCart() {
  return (
    <Container>
      <EmptyCartContainer>
        <LottieView
          source={EmptyCartAnimation}
          resizeMode='contain'
          autoPlay
          loop
        />
      </EmptyCartContainer>
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </Container>
  );
};
