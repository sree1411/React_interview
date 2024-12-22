
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([])
     
  useEffect(()=>{
    
  const fetchData = async ()=>{
      let response = await fetch("https://fakestoreapi.com/products")
      let data = await response.json()
      setProducts(data)
  }
  fetchData()
  },[])



  return (
      <div>
          <h1> welcome to the application </h1>
          <ul>
              {
                products.map((product)=>(
                  <li>
                    {product.title}
                  </li>
                ))
              }
          </ul>
      </div>
  );
}

export default App;
