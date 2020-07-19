import React from 'react'
    

      function Products(props) {
        return (
        <div className="main">
{props.x.map((Product) => (
          <table>
  <tr>
  
    <td>{Product.Category}</td>
    <td>{Product.Name}</td>
<td>{Product.Price}</td>
  </tr>

</table>
))}
          </div>
        );
      }
      export default Products;

