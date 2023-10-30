import React from 'react'

const Footer = ({length}) => {
    const today = new Date();
  return (
    <div>
        <h3>{length} List {length === 1 ? 'Item' : "Items"}</h3>
    </div>
  )
}

export default Footer