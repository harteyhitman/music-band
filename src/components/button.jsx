import React from 'react'

const Button = ({className, onClick, label}) => {
  return (
    <div>
        <button className={className} onClick={onClick}>{label}</button>
    </div>
  )
}

export default Button