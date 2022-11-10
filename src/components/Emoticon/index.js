import React from 'react';
import './style.css';
import { useSettings } from '../../setting-context';
import { eyesData, mouthData, colorsData } from '../../data';

const Emoticon = () => {
  const settings = useSettings();

  return (
    <div
      className="emoticon"
      style={{ backgroundColor: colorsData[settings.color - 1].value }}
    >
      <img className="emoticon__eyes" src={eyesData[settings.eyes - 1].image} />
      <img
        className="emoticon__mouth"
        src={mouthData[settings.mouth - 1].image}
      />
    </div>
  );
};

export default Emoticon;
