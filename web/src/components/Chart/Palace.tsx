'use client';

import React from 'react';
import { Palace as PalaceType, Star } from '@/types/astro';

export interface PalaceProps {
  palace: PalaceType;
  isMainPalace: boolean;
  isBodyPalace: boolean;
}

export const Palace: React.FC<PalaceProps> = ({
  palace,
  isMainPalace,
  isBodyPalace
}) => {
  const { name, stars, flowYears, ages, direction } = palace;

  // 按星耀类型分组
  const mainStars = stars.filter(star => star.type === 'main');
  const auxiliaryStars = stars.filter(star => star.type === 'auxiliary');
  const miscStars = stars.filter(star => star.type === 'misc');

  // 渲染星耀
  const renderStar = (star: Star) => {
    const hasTransformations = star.transformations && star.transformations.length > 0;
    return (
      <span 
        key={star.name}
        className={`
          text-sm inline-block mr-1
          ${star.type === 'main' ? 'text-yellow-400' : ''}
          ${star.type === 'auxiliary' ? 'text-cyan-400' : ''}
          ${star.type === 'misc' ? 'text-gray-400' : ''}
          ${hasTransformations ? 'text-red-500' : ''}
        `}
      >
        {star.name}
        {hasTransformations && (
          <span className="text-xs text-red-500">
            ({star.transformations?.join(',')})
          </span>
        )}
      </span>
    );
  };

  return (
    <div 
      className={`
        aspect-square bg-black
        border border-gray-700
        flex flex-col
        ${isMainPalace ? 'border-red-500' : ''}
        ${isBodyPalace ? 'border-blue-500' : ''}
      `}
    >
      {/* 方位和宫位名称 */}
      <div className="border-b border-gray-700 p-1 text-center">
        <div className="text-gray-400 text-xs">{direction}</div>
        <div className="text-white text-sm">{name}</div>
      </div>

      {/* 星耀区域 */}
      <div className="flex-1 p-1 text-sm">
        {/* 主星 */}
        <div className="flex flex-wrap">
          {mainStars.map(renderStar)}
        </div>

        {/* 辅星 */}
        <div className="flex flex-wrap">
          {auxiliaryStars.map(renderStar)}
        </div>

        {/* 杂耀 */}
        <div className="flex flex-wrap">
          {miscStars.map(renderStar)}
        </div>
      </div>

      {/* 大限小限 */}
      <div className="border-t border-gray-700 p-1">
        <div className="text-gray-400 text-xs">
          <div>流年: {flowYears.join(',')}</div>
          <div>小限: {ages.join(',')}</div>
        </div>
      </div>
    </div>
  );
}; 