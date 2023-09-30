import React from 'react'

export default function Card(activity) {
  return (
    <div className='container__right--children__details'>
        <div className="label">
              <p>{activity}</p>
              <span></span>
        </div>
    </div>
  )
}
