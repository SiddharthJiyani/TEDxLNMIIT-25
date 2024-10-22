import React from 'react';

const Title = ({ text, className = '' }) => {
  return (
    <h2 className={`text-[60px] mt-10 leading-[64px] font-medium text-transparent bg-clip-text bg-heading-gradient ${className}`}>
      {text}
    </h2>
  );
};

export default Title;
