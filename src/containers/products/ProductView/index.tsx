import { Product } from 'actions/redux/product/interfaces';
import * as React from 'react';
import { Card } from 'react-bootstrap';
import { TranslateFunction } from 'react-localize-redux/es';
import { Link } from 'react-router-dom';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { Dispatch } from 'redux';
import ProductActions, { productSelector } from 'actions/redux/product';

interface Props {
	product: Product;
	translate: TranslateFunction;
}
interface OwnProps {
	deleteProduct:(product:Product)=>void;

}

const ProductView: React.FC<Props> = (props: Props & OwnProps) => {
	const { product, translate } = props;
	const deleteProductHandler = () => {
		const { deleteProduct } = props;
		deleteProduct(product);
	}
	return (
		<Card>
			<Card.Header> {product.name}</Card.Header>
			<Card.Body>
				{product.description}
				<br />
				<Link to={{ pathname: `product/${product.id}` }}> {translate('products.updateProduct')}</Link>
				<button type="button" onClick={deleteProductHandler}>{translate('products.deleteProduct')}</button>
			</Card.Body>
			<Card.Img src={product.picture} />
		</Card>
	);
};

export default baseConnect(ProductView,
	undefined,
	(dispatch: Dispatch) => ({
		deleteProduct:(product:Product)=>dispatch(ProductActions.deleteProduct(product))

	}));
