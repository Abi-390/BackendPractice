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
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    {products && (
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-80">
        
        {/* Product Image */}
        <img
          src={products.image}
          alt={products.title}
          className="w-full h-60 object-cover"
        />

        {/* Product Details */}
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">
            {products.title}
          </h2>

          <p className="text-gray-600 text-sm">
            {products.description}
          </p>

          <div className="text-lg font-bold text-green-600">
            ₹ {(products.price.amount/100).toLocaleString()} {products.price.currency}
          </div>

          <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Pay with Razorpay
          </button>
        </div>

      </div>
    )}
  </div>
);

}

export default App
