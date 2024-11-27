import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circular = ({ percentage, width, height }) => {
  return (
    <div style={{ width: width, height: height }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0,

          // Whether to use rounded or flat corners on the ends
          strokeLinecap: 'round',

          // Text size
          textSize: '14px',

          // Colors
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: '#333',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default Circular;
