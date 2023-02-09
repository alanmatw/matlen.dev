import React, { useEffect } from 'react';
import UseSound from 'use-sound';
import './song.css'
import panda from '../../assets/warriyo.mp3';

function Song() {

  const [play, { stop }] = UseSound(panda);

  useEffect(() => {

  })

  return (
    <div className='btn-wrapper'>
      <button className='btn1' onClick={() => play()}></button>
      <button className='btn2' onClick={() => stop()}></button>
    </div>

  ); 
} 

export default Song;