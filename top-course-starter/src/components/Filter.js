import React from 'react'

const Filter = ({filterData , category , setCategory}) => {

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className='flex flex-row gap-6 align-center justify-center p-[20px]'>
        {
          filterData.map((filter)=>{
            return <button className='text-white text-xl border-2 p-[6px] rounded-lg bg-neutral-700' key={filter.id} onClick={() => filterHandler(filter.title)}>{filter.title}</button>
          })
        }
    </div>
  )
}

export default Filter