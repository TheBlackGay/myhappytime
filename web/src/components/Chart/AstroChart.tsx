'use client';

import React from 'react';
import { Chart } from '@/types/astro';
import { Palace } from './Palace';

interface AstroChartProps {
  chart: Chart;
}

export const AstroChart: React.FC<AstroChartProps> = ({ chart }) => {
  const { palaces, birthInfo, fiveElements } = chart;

  return (
    <div className="w-[800px] bg-black p-4">
      {/* 顶部四宫 */}
      <div className="grid grid-cols-4 gap-1">
        <Palace
          palace={palaces[2]} // 正东
          isMainPalace={palaces[2].name === chart.mainPalace}
          isBodyPalace={palaces[2].name === chart.bodyPalace}
        />
        <Palace
          palace={palaces[3]} // 东南
          isMainPalace={palaces[3].name === chart.mainPalace}
          isBodyPalace={palaces[3].name === chart.bodyPalace}
        />
        <Palace
          palace={palaces[4]} // 正南
          isMainPalace={palaces[4].name === chart.mainPalace}
          isBodyPalace={palaces[4].name === chart.bodyPalace}
        />
        <Palace
          palace={palaces[5]} // 西南
          isMainPalace={palaces[5].name === chart.mainPalace}
          isBodyPalace={palaces[5].name === chart.bodyPalace}
        />
      </div>

      {/* 中间区域 */}
      <div className="grid grid-cols-4 gap-1 my-1">
        {/* 左侧两宫 */}
        <div className="space-y-1">
          <Palace
            palace={palaces[1]} // 东北
            isMainPalace={palaces[1].name === chart.mainPalace}
            isBodyPalace={palaces[1].name === chart.bodyPalace}
          />
          <Palace
            palace={palaces[9]} // 东北偏南
            isMainPalace={palaces[9].name === chart.mainPalace}
            isBodyPalace={palaces[9].name === chart.bodyPalace}
          />
        </div>

        {/* 中心信息区域 */}
        <div className="col-span-2 bg-black border border-gray-700 p-4">
          <div className="text-center text-white">
            <div className="text-lg mb-2">文曲天机</div>
            <div className="text-sm space-y-1">
              <div>姓名：{birthInfo.name}</div>
              <div>{birthInfo.gender === 'male' ? '阳男' : '阴女'} {fiveElements}</div>
              <div>真太阳时：{birthInfo.solarTime}</div>
              <div>排盘时间：{birthInfo.chartTime}</div>
            </div>
          </div>
        </div>

        {/* 右侧两宫 */}
        <div className="space-y-1">
          <Palace
            palace={palaces[6]} // 正西
            isMainPalace={palaces[6].name === chart.mainPalace}
            isBodyPalace={palaces[6].name === chart.bodyPalace}
          />
          <Palace
            palace={palaces[0]} // 正北
            isMainPalace={palaces[0].name === chart.mainPalace}
            isBodyPalace={palaces[0].name === chart.bodyPalace}
          />
        </div>
      </div>

      {/* 底部四宫 */}
      <div className="grid grid-cols-4 gap-1">
        <Palace
          palace={palaces[10]} // 东南偏北
          isMainPalace={palaces[10].name === chart.mainPalace}
          isBodyPalace={palaces[10].name === chart.bodyPalace}
        />
        <Palace
          palace={palaces[11]} // 正南偏西
          isMainPalace={palaces[11].name === chart.mainPalace}
          isBodyPalace={palaces[11].name === chart.bodyPalace}
        />
        <Palace
          palace={palaces[0]} // 正北
          isMainPalace={palaces[0].name === chart.mainPalace}
          isBodyPalace={palaces[0].name === chart.bodyPalace}
        />
        <Palace
          palace={palaces[8]} // 东北偏南
          isMainPalace={palaces[8].name === chart.mainPalace}
          isBodyPalace={palaces[8].name === chart.bodyPalace}
        />
      </div>
    </div>
  );
}; 