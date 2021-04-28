import { Product } from 'actions/redux/product/interfaces';
import * as React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
	filterTextId:string;
	filterText: string;
	inStockOnly: boolean;
	onFilterTextChange: (text: string) => void;
	onFilterTextIdChange: (text: string) => void;
	onInStockChange: (inStock: boolean) => void;
}

const ProductSearchBar: React.FC<Props> = (props: Props) => {
	const {
		filterText,filterTextId, inStockOnly, onFilterTextChange,onFilterTextIdChange, onInStockChange
	} = props;

	function handleFilterTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterTextChange(e.target.value.toString());
	}

	function handleFilterTextIdChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterTextIdChange(e.target.value.toString());
	}

	function handleInStockChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value: boolean = e.target.checked as any as boolean;
		onInStockChange(value);
	}
	return (
		<Form>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Search..."
					value={filterText}
					onChange={handleFilterTextChange}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Search by Id..."
					value={filterTextId}
					onChange={handleFilterTextIdChange}
				/>
			</Form.Group>


			<Form.Group>
				<Form.Check
					label="Only show products in stock"
					checked={inStockOnly}
					onChange={handleInStockChange}
				/>
			</Form.Group>
		</Form>
	);
};

export default ProductSearchBar;
