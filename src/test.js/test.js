/*app.js*/
import React from 'react';
import './App.css';
import Pr from './components/Products'

/*const Products =[Category,Name,Price]*/

function App() {
  return (
    <div className="App">
     <Pr />
    </div>
  );
}




export default App;
/*end*/
/*product*/
import React from 'react'
    

      function Products(props) {
        return (
        <div>
          <table>
  <tr>
    <th>Category</th>
    <th>Name</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Electronics</td>
    <td>Iphone Xr</td>
    <td>830$</td>
  </tr>
  <tr>
    <td>Clothes</td>
    <td>Sneakers(Balenciaga)</td>
    <td>800$</td>
  </tr>
  <tr>
    <td>Sports</td>
    <td>Football Shirt</td>
    <td>45$</td>
  </tr>
</table>
          </div>
        );
      }
      export default Products;

