
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./Home.css";

// const Home = () => {
//     const [products, setProducts] = useState([]);
//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         const fetch = async () => {
//             try {
//                 const response = await axios.get("https://fakestoreapi.com/products");
//                 //console.log(response.data);
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         fetch();
//     }, []);

//     const filteredProducts = products.filter(product =>
//         product.title.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div className='home-container'>
//             <h1>Product List</h1>
//             <input
//                 type="text"
//                 placeholder='Search here'
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className='search-input'
//             />
//             <div className='grid-container'>
//                     {/* {filteredProducts.length > 0 ? ( */}
//                     filteredProducts.map((product) => (
//                         <div key={product.id} className='grid-item'>
//                             <h3>{product.title}</h3>
//                             <p>{product.description}</p>
//                             <p>Price: ${product.price}</p>
//                             <img src={product.image} alt={product.title} style={{ width: '100px' }} />
//                         </div>
//                     ))
//                 ) : (
//                     <p>No products found</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;









import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetch();
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='home-container'>
            <h1>Product List</h1>
            <input
                type="text"
                placeholder='Search here'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='search-input'
            />
            <div className='grid-container'>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className='grid-item'>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default Home;








