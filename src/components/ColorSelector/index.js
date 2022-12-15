import React from 'react';
import { useSettings } from '../../setting-context';
import { colorsData } from '../../data';

const ColorSelector = () => {
  const { settings, changeColor } = useSettings();
  const handleClick = (item) => {
    changeColor(item.id);
  };

  return (
    <div className="items">
      {colorsData.map((color) => (
        <div
          className={settings.color === color.id ? 'item active' : 'item'}
          key={color.id}
          style={{ backgroundColor: color.value }}
          onClick={() => {
            handleClick(color);
          }}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
