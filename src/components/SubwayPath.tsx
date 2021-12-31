import React, { FunctionComponent, useState } from 'react';
import './SubwayPath.css';

import { useSpring, animated } from 'react-spring';

type SubwayPathProps = {
  name: string;
  color: string;
  data: string;
};

const SubwayPath: FunctionComponent<SubwayPathProps> = ({
  name,
  color,
  data,
}) => {
  const [path_color, set_color] = useState(color);
  // const [clear, set_clear] = useState(false);
  const { x } = useSpring({
    reset: true,
    from: { x: 0 },
    x: 1,
    delay: 20,
    config: {
      duration: 5000,
    },
  });

  return (
    <div className="SubwayPath-container">
      <animated.svg
        viewBox="0 0 3449 2443"
        strokeDasharray={10000}
        strokeDashoffset={x.to((x) => (1 - x) * 10000)}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={path_color}
        strokeWidth="20"
        fill="none"
      >
        <path d={data} />
      </animated.svg>
    </div>
  );
};

export default SubwayPath;
