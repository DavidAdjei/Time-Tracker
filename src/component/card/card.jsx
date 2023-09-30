import React from 'react';
import ellipsis from '../../images/icon-ellipsis.svg';
import './card.css'

export default function Card({ activity, current, previous, active }) { 
  return (
    <div className={`container__right--children ${activity}`}>
      <div className="container__right--children__details">
        <div className="label">
          <p>{activity}</p> <span><img src={ellipsis} alt="" /></span>
        </div>
        <div className="details">
          <h2>{current}hrs</h2>
          <p>Last {active === 'Daily' ? 'Day' : active === 'Weekly' ? 'Week' : 'Month'} - {previous}hrs</p>
        </div>
      </div>
    </div>
  );
}
