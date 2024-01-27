import React from 'react'
import Stories from '../components/Stories';
import Timemap from '../components/Timemap';
import Footersec from '../components/Footersec';
import Lamon from '../components/Lamon';
import Navsec from '../components/Navsec';
import Backtotop from '../components/Backtotp';

function News() {
  return (
    <div>
      <Navsec />
      <Timemap />
      <Lamon />
      <Stories />
      <div className='pt-12'>
        <Footersec />
      </div>
      <Backtotop />

    </div>
  )
}

export default News
