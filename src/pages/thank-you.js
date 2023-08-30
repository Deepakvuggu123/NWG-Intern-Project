import { useRouter } from 'next/router'
import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

function ThankYou() {
    const router = useRouter();
    console.log('router', router.query)
  return (
    <div>
      <h1>Yout Order has been placed sucessfully.</h1>
      <hr class="mb-9 mt-3"/>
      <button type='submit' className='w-90 btn btn-primary btn-lg'>Continue to Shopping <BsFillArrowRightCircleFill size={21}/> </button>
    </div>
  )
}

export default ThankYou
