import React from 'react'

export const Loader = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {props.children}
    </div>
  )
}
