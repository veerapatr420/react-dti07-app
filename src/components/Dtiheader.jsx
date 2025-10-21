import React from 'react'

export default function Dtiheader(props) {
    const {title,detail} = props
    
  return (
    <div>
        <h1 className='text-center mt-20 text-3xl font-bold '>
            {title}
        </h1>
        <h3 className='text-center mt-5 text-xl'>
            {detail}
        </h3>
        <hr />
    </div>
  )
}
