import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' flex items-center justify-center gap-6 '>
      <h1>This is courses page</h1>
      <Link href="/courses/mern-course" className='px-4 py-2 bg-green-500 absolute bottom-7'>Mern Course</Link>
    </div>



  )
}

export default page
