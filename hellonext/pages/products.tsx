import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';
import Product from "../Interface/Product";
interface Props {
	products?: Product[];
}
const Products = (props: Props) => {
	const router = useRouter();
	const { products } = props;
	return (
		<div>
			<h1>this is products</h1>
			<ul>
				{products.map((item, index) => {
					return <li key={index}>{item.name}</li>;
				})}
			</ul>
		</div>
	);
};
Products.getInitialProps = async (ctx) => {
	const { query } = ctx;
	console.log(query);
	const response = await Axios({
		method: 'GET',
		url: `https://5e3995ba8d7e1300149cd550.mockapi.io/products/Products`,
		headers: {
			Accept: 'application/json',
		},
	})
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});

	return {
		products: response,
	};
};
export default Products;
