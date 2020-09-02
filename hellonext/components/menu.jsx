import Link from 'next/link';
const Menu = () => {
	return (
		<div style={{display: 'flex'}}>
			<div>
				<Link href='/products'>
					<a>Products</a>
				</Link>
			</div>
			&nbsp;
			<div>
				<Link href='/'>
					<a>Home</a>
				</Link>
			</div>
		</div>
	);
};
export default Menu;
