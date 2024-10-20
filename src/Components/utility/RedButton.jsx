import React from 'react';
import { Link } from 'react-router-dom';

const RedButton = ({ to, children, style }) => {
    return (
        <Link
            to={to}
            className={`bg-gradient-to-r from-[#EE2806] to-transparent rounded-full px-[24px] py-[8px] text-white text-[16px] leading-[24px] font-regular font-[Generalsans Regular] ${style}`}
        >
            {children}
        </Link>
    );
};

export default RedButton;
