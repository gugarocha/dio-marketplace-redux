import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 60px;
  border-radius: 20px;
  background: #e83f5b;
`;

export const ProductList = styled(FlatList)`
  flex: 1;
  padding: 30px 0;
`;

export const Product = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 5px;
  background: #fff;
  min-width:  350px;
  min-height: 130px;
  padding: 15px 10px;
  border-radius: 20px;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 140px;
`;

export const ProductTitleContainer = styled.View`
  margin-left: 5px;
  margin-top: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalPrice = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductSinglePrice = styled.Text`
  font-size: 12px;
  color: #414756;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  font-size: 16px;
  color: #e83f5b;
`;

export const ProductQuantity = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;
  font-size: 16px;
  color: #e83f5b;
`;

export const ActionsContainer = styled.View`
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`;

export const ActionsButton = styled.TouchableOpacity`
  background: rgba(232, 63, 92, 0.1);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const TotalProductsContainer = styled.View`
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 36px 40px;
  border-radius: 10px;
  background: #e83f5b;
`;

export const TotalProductsText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #fff;
  margin-left: 15px;
  font-weight: bold;
`;

export const SubTotalValue = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;