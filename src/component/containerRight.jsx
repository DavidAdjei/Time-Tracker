import React from 'react';
import Card from './card/card';
import './container.css'

export default function ContainerRight({ data, active }) {
  return (
    <div className='container__right'>
      {data.map(activity => (
        <Card
          key={activity.title}
          activity={activity.title}
          current={
            active === 'Daily'
              ? activity.timeframes.daily.current
              : active === 'Weekly'
              ? activity.timeframes.weekly.current
              : activity.timeframes.monthly.current
          }
          previous={
            active === 'Daily'
              ? activity.timeframes.daily.previous
              : active === 'Weekly'
              ? activity.timeframes.weekly.previous
              : activity.timeframes.monthly.previous
          }
            active = {active}
        />
      ))}
    </div>
  );
}
