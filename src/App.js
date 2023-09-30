import React, { useState } from 'react';
import ContainerLeft from './component/containerLeft';
import ContainerRight from './component/containerRight';
import data from './data.json';

export default function App() {
  const [active, setActive] = useState('Weekly');
  const [activity, setActivity] = useState(data);

  const toggleActive = (title) => {
    setActive(title);
  };

  return (
    <div className='container'>
      <ContainerLeft toggleActive={toggleActive} active={active}/>
      <ContainerRight data={activity} active={active} />
    </div>
  );
}
