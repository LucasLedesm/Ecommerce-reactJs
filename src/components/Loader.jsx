import React, { useEffect, useState } from 'react'

const Loader = () => {
const [loading, setloading] = useState(true)

useEffect(() => {
  setTimeout(() => {
      setloading(false);
  },5000);

  return () => {
    setloading(true)
  }
}, [])
  return (
    <>
    {loading === true ? 
    <div className='container-fluid'>
        <h1>..Cargando</h1>
        <div class="clearfix">
     <div className='spinner-border float-end ' role="status">
       <span class="visually-hidden">Loading...</span>
     </div>
   </div>
    </div>
     : <h1>listo</h1> }
    </>
  )
}

export default Loader