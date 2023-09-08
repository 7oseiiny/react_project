import React from 'react'
import PropTypes from 'prop-types';

export default function MainCards(props) {
  return (
    <div className="card col-xl-3 col-md-6 col-12 overflow-hidden">
    <img className="pt-4 w-25 align-self-center h-50" src={props.img} alt="fan image"/>
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
