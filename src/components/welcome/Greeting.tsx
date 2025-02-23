import React from 'react';
import backgroundImage from '../../assets/background.svg';
import { SunFilled } from '@ant-design/icons';
import { GreetingHeader } from '../../types/welcome';

const Greeting: React.FC<GreetingHeader> = ({ name }) => {
  return (
    <div
      className='p-6 relative overflow-hidden -mb-10 flex  items-center'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '220px',
      }}
    >
      <div className='relative'>
        <p className='text-gray-600 mb-1 flex items-center'>
          Chào buổi sáng
          <span className='ml-2' role='img' aria-label='wave'>
            <SunFilled
              style={{
                fontSize: 20,
                color: 'orange',
              }}
            />
          </span>
        </p>
        <h1 className='text-2xl font-bold text-gray-800'>{name}</h1>
      </div>
    </div>
  );
};

export default Greeting;
