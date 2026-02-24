import {useState,useEffect} from 'react'
import axios from 'axios';  


const App = () => {
 
  const [products, setProducts] = useState(null);

  useEffect(()=>{
    console.log("Effect running")
    axios.get('http://localhost:3000/api/products/get-item').then(response=>{

      console.log("Products:",response.data.products)
      setProducts(response.data.products);
      
    })
  },[])

  return (
    <div>
     
    </div>
  )
}

export default App
