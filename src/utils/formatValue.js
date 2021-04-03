import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const formatValue = value => 
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);

  export default formatValue;