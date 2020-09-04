import { useEffect, useState, useMemo } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router';
import Product from "../Interface/Product";

interface Props {
    products?: Product[];
}

const Products = ({ products }: Props) => {
    const [count, setCount] = useState(0);
    useMemo(() => {
        console.log("memo: render 1 lần duy nhất khi khởi tạo chạy sau getInitialProps");
    }, [])
    const router = useRouter();
    useEffect(() => {
        console.log("render mỗi khi biến count thay đổi");
    }, [count])
    return (
        <div>
            <h1>this is products {count}</h1>
            <ul>
                {products.map((item, index) => {
                    return <li key={index}>{item.name}</li>;
                })}
            </ul>
            <button onClick={() => setCount(count + 1)}>count</button>
        </div>
    );
};
Products.getInitialProps = async (ctx) => {
    console.log("getInitialPropsrender: 1 lần duy nhất khi khởi tạo và chạy đầu tiên");
    const { query } = ctx;
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
