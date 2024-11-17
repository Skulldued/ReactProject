import React from 'react'

const Card = ({id,title,paragraph}) => {
  return (
    <div className='w-[350px] shadow-lg my-5 shadow-slate-400 rounded-md bg-white py-8 px-10 relative'>
      <div>
        <div className='w-12 h-12 bg-green-600 flex  justify-center items-center text-white rounded-full absolute border-4  left-[45%]  top-[-24px] '>
            <span>{id}</span>
        </div>
        <h4 className='text-center font-bold'>{title}</h4>
        <p className="text-center ">
            {paragraph}
        </p>
      </div>
    </div>
  )
}

export default Card
