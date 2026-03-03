import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>This is products page</h1>
      <div className='flex px-6 gap-6 items-center justify-center'>
         <Link href="/products/male-products">Male Products</Link>
       <Link href="/products/female-products">Female Products</Link>
      </div>
     
    </div>
  )
}

export default page
