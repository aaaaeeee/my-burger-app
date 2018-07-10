import React from 'react'
import classess from './Backdrop.css';

const backdrop = (props) => {
  return (
      props.show ?<div className={classess.Backdrop} onClick={props.clicked} ></div> : null
  )
}

export default backdrop;
