import React from 'react';
import './filter.scss';

const Filter = ({ label, type, value, onChange, options, min, max }) => {
  return (
    <div className="field-container">
      <label className="field-label">{label}</label>
      <div className="input-box">
        {type === 'select' ? (
          <select 
            className="custom-select" 
            value={value} 
            onChange={(e) => onChange(e.target.value)}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <div className="range-wrapper">
            <div className="range-labels">
              <span>{min}</span>
              <span>{max}</span>
            </div>
            <input 
              type="range" 
              className="slider"
              min={min} 
              max={max} 
              value={value} 
              onChange={(e) => onChange(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;