import React from 'react'
import { useQuery } from '@apollo/client';

import Message from '../components/ThoughtList';
// import Message from '../components/ThoughtForm';

import "../pages/styles/home.css"


function home() {
  return (
    <div className='home'>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <GifterForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Message
              thoughts={thoughts}
              title="Add Your Information and Credit Card Gift..."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default home;