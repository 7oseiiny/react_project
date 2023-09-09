import React from 'react'
import PropTypes from 'prop-types';

export default function MainCards(props) {
  return (
    <div className="card col-xl-3 col-md-6 col-12 overflow-hidden py-3">
    <img className="pt-4 w-50 align-self-center h-75" src={props.img} alt="image"/>
    <div className="card-body h-25">
      <h4 className="card-title text-danger"><span className="badge rounded-1 bg-danger p-2 me-1">Up to {props.discount}
          off</span>Deal</h4>
      <p className="card-text mainCards">Save On {props.title}</p>
    </div>
  </div>
  )
}
MainCards.propTypes={
    img:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    discount:PropTypes.string.isRequired,
}
