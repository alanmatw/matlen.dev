import React from 'react';
import UseSound from 'use-sound';
import './song.css'
import panda from '../../assets/panda.mp3';

function song() {

  const [play, { stop }] = UseSound(panda);

  return (
    <div className='btn-wrapper'>
      <button className='btn1' onClick={() => play()}></button>
      <button className='btn2' onClick={() => stop()}></button>
    </div>

  ); 
} 
export default song;