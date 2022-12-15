import React from 'react';
import { eyesData } from '../../data';
import { useSettings } from '../../setting-context';

const EyesSelector = () => {
  const { settings, changeEyes } = useSettings();

  const handleClick = (item) => {
    changeEyes(item.id);
  };

  return (
    <div className="items">
      {eyesData.map((eyes) => (
        <img
          className={settings.eyes === eyes.id ? 'item active' : 'item'}
          key={eyes.id}
          src={eyes.image}
          onClick={() => {
            handleClick(eyes);
          }}
        />
      ))}
    </div>
  );
};

export default EyesSelector;
