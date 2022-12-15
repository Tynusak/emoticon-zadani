import React from 'react';
import { useSettings } from '../../setting-context';
import { mouthData } from '../../data';

const MouthSelector = () => {
  const { settings, changeMouth } = useSettings();
  const handleClick = (item) => {
    changeMouth(item.id);
  };

  return (
    <div className="items">
      {mouthData.map((mouth) => (
        <img
          className={settings.mouth === mouth.id ? 'item active' : 'item'}
          key={mouth.id}
          src={mouth.image}
          onClick={() => {
            handleClick(mouth);
          }}
        />
      ))}
    </div>
  );
};

export default MouthSelector;
