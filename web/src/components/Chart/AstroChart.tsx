'use client';

import React from 'react';

interface AstroChartProps {
  birthTime: Date;
}

export const AstroChart: React.FC<AstroChartProps> = ({ birthTime }) => {
  return (
    <div className="w-full aspect-square max-w-2xl mx-auto bg-gray-900 rounded-full relative">
      {/* 命盘主体将在这里实现 */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <p>紫微斗数命盘</p>
        <p>{birthTime.toLocaleString()}</p>
      </div>
    </div>
  );
}; 