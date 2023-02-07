import React from 'react';
import UseSound from 'use-sound';
import './song.css'
import panda from '../../assets/panda.mp3';

const song = () => {

  const [play] = UseSound(panda);

  return <button className='btn' onClick={play}></button>;
};

export default song;