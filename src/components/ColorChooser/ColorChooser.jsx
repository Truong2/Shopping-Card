import React, { useState } from "react";

const ColorChooser = ({ colors, onColorChange, selectedColor }) => {
  const setColor = (color) => {
    onColorChange(color);
  };
  return (
    <div className="flex w-full">
      {colors.map((color) => (
        <div
          className={
            selectedColor === color
              ? "color-item color-item-selected"
              : "color-item"
          }
          key={color}
          onClick={() => {
            setColor(color);
          }}
          style={{ backgroundColor: color }}
          role="presentation"
        />
      ))}
    </div>
  );
};

export default ColorChooser;
