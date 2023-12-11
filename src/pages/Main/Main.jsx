import ProductContainer from 'components/ProductContainer';
import cardItems from '../../shared/utils/constants/cardItems';

function Main() {
	return <ProductContainer data={cardItems} mode="default" />;
}

export default Main;
