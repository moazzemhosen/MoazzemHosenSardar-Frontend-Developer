import React from 'react'
import Modal from './Modal';


const GridPage = ({usesData}) => {
   
  return (
    <div className='grid gap-4 grid-cols-3'>
    {usesData.slice(0,10).map((e,i)=>{
            return  <Modal key={i} data={e} />
        })}
        <div>

        </div>
    </div>
  )
}

export default GridPage