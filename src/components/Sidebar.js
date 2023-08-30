import Link from 'next/link'
import React from 'react'
import {MdCategory} from 'react-icons/md'
import {BsDash} from 'react-icons/bs'
import useSwr from 'swr'
import { fetcher } from '@/styles/utils/swrFetcher'


function Sidebar() {
  const categories=[1, 2, 3, 4, 5, 6, 7];

  const {data, error, isLoading} = useSwr('https://dummyjson.com/products/categories',fetcher) ;
 
  if(error) return <div>Failed to load</div>
  if(isLoading) return <div>Loading...</div>  
  
  return (
    <div className='w-100'>
        <ul className='list-group'>
            <li className='list-group-item d-flex align-items-center navbar-top-bg'>
        <h5 className='text-white mt-2 text-uppercase'>
    <MdCategory/>Categories 
        </h5>
            </li>
            {
              data.map((category, i) => { 
                return(
                  <Link key={i} href={`/category/${category}`} className='text-decoration-none'>
                  <li className='list-group-item list-group-item-action d-flex align-items-center text-uppercase'>
                    <BsDash size={24} className="m-2"/>
                      {category}
                  </li>
                </Link>
                )
              })
            }
           
        </ul>
      
    </div>
  )
}

export default Sidebar

