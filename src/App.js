
// import ProductList from "./ProductList";
// import './App.css';


// function App() {

//   const products = [
//     { id: 1, name: "Mobiles", price: 25000, description: "Best gaming mobile" },
//     { id: 2, name: "Phones", price: 25000, description: "Best gaming phone" },
//     { id: 3, name: "AC", price: 25000, description: "5 star AC" },
//     { id: 4, name: "Shirts", price: 25000, description: "100% cotton" },
//     { id: 5, name: "Laptop", price: 25000, description: "Best gaming laptop" }
//   ]

//   return (
//     <>
//       <div>
//         <h1>Product Listing</h1>
//         <ProductList products={products} />
//       </div>
//     </>
//   );
// }

// export default App;

// import Child from "./components/Child";
// import './App.css';


// function App() {
//   const username = "Chandini";

//   return(
//     <div>
//     <Child username = {username}/>
//     </div>
//   );
// }


// export default App;


import Child from "./components1/Child";
import './App.css';


function App() {
  //callback function to recive data from child to parent and 
  // props used is endObjToParent to pass the function to child
  const handleObjectFromChild =  (obj) => {
    console.log("Received from child ",obj)
    alert(obj);
  }

  return(
    <div>
    <Child SendObjToParent = {handleObjectFromChild}/>
    </div>
  );
}


export default App;
