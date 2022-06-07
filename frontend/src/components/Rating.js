import React from 'react'

function Rating({ value, numReviews }) {
  return (
    <div className='estrelas-da-avaliação-do-produto'>
      <span>
        <i
          className={
            value >= 1
              ? 'fa fa-star'
              : value >= 0.5
              ? 'fa fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 2
              ? 'fa fa-star'
              : value >= 1.5
              ? 'fa fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 3
              ? 'fa fa-star'
              : value >= 2.5
              ? 'fa fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 4
              ? 'fa fa-star'
              : value >= 3.5
              ? 'fa fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 5
              ? 'fa fa-star'
              : value >= 4.5
              ? 'fa fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      {numReviews && (
        <span className='texto-do-numero-de-revisoes-do-produto'>
          {' '}
          ({numReviews} avaliações)
        </span>
      )}
    </div>
  )
}

export default Rating
