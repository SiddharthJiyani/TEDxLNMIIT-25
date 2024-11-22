import React from 'react';

const Title = ({ text,red ,className = '' }) => {
  return (
<h2
  className={`text-[60px] mt-10 leading-[64px] font-medium text-transparent bg-clip-text ${className}`}
  style={{
    backgroundImage:
      'linear-gradient(90deg, #c0c0c0 0%, #8e8e8e 20%, #c0c0c0 40%, #ffffff 50%, #c0c0c0 60%, #8e8e8e 80%, #4a4a4a 100%)',
  }}
>
  {text}{" "}
  <span
    className="text-transparent bg-clip-text"
    style={{
      backgroundImage:
        'linear-gradient(90deg, #ff2c05 0%, #ff3306 10%, #f22c04 20%, #e02603 30%, #ce2200 40%, #ff2c05 50%, #ce2200 60%, #e02603 70%, #f22c04 80%, #ff3306 90%, #ff2c05 100%)',
    }}
  >
    {red}
  </span>
</h2>


  );
};

export default Title;
