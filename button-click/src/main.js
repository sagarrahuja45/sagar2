// import { useState } from "react";

// function handleclick(count, setcount) {
//   setcount(count+1);
// }

// export  default function MyApp(){
//   const [count,setcount] = useState(0);
   

//   return(
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onclick={() => handleclick(count,setcount)}/>
//       <MyButton count={count} onclick={handleclick}/>
//     </div>
//   )
// }


// function MyButton({count, onclick}){

//   return(
//     <button onClick={onclick}>
//       clicked {count} times
//     </button>
//   )
// }

// updating state multiple times before render 

// import { useState } from 'react';

// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//       }}>+3</button>
//     </>
//   )
// }




// product table example


// function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan="2">
//         {category}
//       </th>
//     </tr>
//   );
// }

// function ProductRow({ product }) {
//   const name = product.stocked ? product.name :
//     <span style={{ color: 'red' }}>
//       {product.name}
//     </span>;

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{product.price}</td>
//     </tr>
//   );
// }

// function ProductTable({ products }) {
//   const rows = [];
//   let lastCategory = null;

//   products.forEach((product) => {
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category} />
//       );
//     }
//     rows.push(
//       <ProductRow
//         product={product}
//         key={product.name} />
//     );
//     lastCategory = product.category;
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// function SearchBar() {
//   return (
//     <form>
//       <input type="text" placeholder="Search..." />
//       <label>
//       <br></br>
//         <br></br>

//         <input type="checkbox" />
//         Only show products in stock
//       </label>
//     </form>
//   );
// }

// function FilterableProductTable({ products }) {
//   return (
//     <div>
//       <SearchBar />
//       <ProductTable products={products} />
//     </div>
//   );
// }

// const PRODUCTS = [
//   {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
//   {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
//   {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
//   {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
//   {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
//   {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
// ];

// export default function App() {
//   return <FilterableProductTable products={PRODUCTS} />;
// }


// sharing state between components

import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

