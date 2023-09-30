import React from 'react';
import jeremy from '../images/image-jeremy.png';
import './container.css'

export default function ContainerLeft({ toggleActive, active }) { // Added curly braces to destructure props
  return (
    <div className="container__left">
      <div className="container__left--jeremy">
        <div className="container__left--image__container">
          <img src={jeremy} alt="Jeremy's pic" />
        </div>
        <div className="desc">
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <ul className='links'>
        <li className={`${active === 'Daily' ? 'active' : ''}`}
            onClick={() => toggleActive('Daily')}>Daily</li>
        <li className={`${active === 'Weekly' ? 'active' : ''}`}
            onClick={() => toggleActive('Weekly')}>Weekly</li>
        <li className={`${active === 'Monthly' ? 'active' : ''}`}
            onClick={() => toggleActive('Monthly')}>Monthly</li>
      </ul>
    </div>
  );
}
