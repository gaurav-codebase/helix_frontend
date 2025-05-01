import React from 'react';

const HelixControls = ({ params, onParamChange }) => {
  const handleChange = (param, value) => {
    onParamChange({
      ...params,
      [param]: parseFloat(value)
    });
  };

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '8px',
      margin: '20px',
      zIndex: 1000
    }}>
      <h3>Helix Parameters</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>Radius: {params.radius}</label>
        <input
          type="range"
          min="0.5"
          max="3.0"
          step="0.1"
          value={params.radius}
          onChange={(e) => handleChange('radius', e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Pitch: {params.pitch}</label>
        <input
          type="range"
          min="1.0"
          max="5.0"
          step="0.1"
          value={params.pitch}
          onChange={(e) => handleChange('pitch', e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Number of Turns: {params.num_turns}</label>
        <input
          type="range"
          min="1"
          max="20"
          step="1"
          value={params.num_turns}
          onChange={(e) => handleChange('num_turns', e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Points per Turn: {params.points_per_turn}</label>
        <input
          type="range"
          min="50"
          max="200"
          step="10"
          value={params.points_per_turn}
          onChange={(e) => handleChange('points_per_turn', e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Number of Base Pairs: {params.num_base_pairs}</label>
        <input
          type="range"
          min="5"
          max="50"
          step="5"
          value={params.num_base_pairs}
          onChange={(e) => handleChange('num_base_pairs', e.target.value)}
        />
      </div>
    </div>
  );
};

export default HelixControls; 