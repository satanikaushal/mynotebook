import React from 'react'

export const NoteItem = (props) => {
  return (
    <div>
        <div className='flex flex-col border-2 my-5 p-4 space-y-2 rounded-lg'>
            <h3 className='font-semibold text-xl text text-[rgb(61,159,144)]'>{props.title}</h3>
            <p className='text-lg'>Description - {props.description}</p>
            <p>Tag - {props.tag}</p>
        </div>
    </div>
  )
}
