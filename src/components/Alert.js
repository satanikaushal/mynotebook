import React from 'react'

export const Alert = (props) => {
  return (
    <div className={`transform transition-all duration-100 bg-white text-center ${props.alert.clr} w-full`}>
        {props.alert.msg}
    </div>
  )
}
