import React from 'react';
import './App.css';
import Product from './components/Products';

const Products = [

  {Column:"Category",
    Category:"Electronics",
Name:"Iphone Xr",
Price:"830$",
  },

  {Column:"Name",
     Category:"Clothes",
  Name:"Sneakers (Balenciaga)",
  Price:"800$",
  
},

{
  Column:"Price",
  Category:"Sports",
  Name:"Football Shirt",
  Price:"45$",
},




]

function App() {
  return (
    <div className="App">
     <Product x={Products} />
    </div>
  );
}




export default App;
