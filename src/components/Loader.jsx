import React, { useEffect, useState } from 'react'

const Loader = () => {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);

    return () => {
      setloading(true)
    }
  }, [])
  return (
    <>
      {loading === true ?
        <div className='container-fluid  '>
          <div className='row justify-content-center'>
            <div className='col-md-2  '>
              <h1 className='text-white mt-4'>Loading...</h1>
              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-md-2'>
              <h1 className='text-white mt-4'>Ready..</h1>
            </div>
          </div>
        </div>
       }
    </>
  )
}

export default Loader