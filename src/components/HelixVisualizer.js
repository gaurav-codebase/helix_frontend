import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import axios from 'axios';
import HelixControls from './HelixControls';

const HelixVisualizer = () => {
  const [helixData, setHelixData] = useState(null);
  const [params, setParams] = useState({
    radius: 1.0,
    pitch: 3.4,
    num_turns: 10,
    points_per_turn: 100,
    num_base_pairs: 20
  });

  const fetchHelixData = async (newParams) => {
    try {
      const response = await axios.post('http://localhost:8000/api/helix/', newParams);
      setHelixData(response.data);
    } catch (error) {
      console.error('Error fetching helix data:', error);
    }
  };

  useEffect(() => {
    fetchHelixData(params);
  }, [params]);

  const handleParamChange = (newParams) => {
    setParams(newParams);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <HelixControls params={params} onParamChange={handleParamChange} />
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {helixData && (
          <>
            {/* First strand */}
            <Line
              points={helixData.strand1.x.map((x, i) => [x, helixData.strand1.y[i], helixData.strand1.z[i]])}
              color="blue"
              lineWidth={2}
            />
            {/* Second strand */}
            <Line
              points={helixData.strand2.x.map((x, i) => [x, helixData.strand2.y[i], helixData.strand2.z[i]])}
              color="red"
              lineWidth={2}
            />
            {/* Base pairs */}
            {helixData.base_pairs.map((pair, index) => (
              <Line
                key={index}
                points={[
                  [pair.x[0], pair.y[0], pair.z[0]],
                  [pair.x[1], pair.y[1], pair.z[1]]
                ]}
                color="green"
                lineWidth={1}
              />
            ))}
          </>
        )}
      </Canvas>
    </div>
  );
};

export default HelixVisualizer; 