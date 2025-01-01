'use client';

import React, { useState } from 'react';
import { BirthForm } from '@/components/BirthForm';
import { AstroChart } from '@/components/Chart/AstroChart';
import { calculateChart } from '@/lib/calculate';
import { Chart } from '@/types/astro';

export default function ChartPage() {
  const [chart, setChart] = useState<Chart | null>(null);

  const handleSubmit = (birthTime: Date, gender: 'male' | 'female') => {
    const newChart = calculateChart(birthTime, gender);
    setChart(newChart);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-8 text-white">
          <button className="text-sm">命例</button>
          <h1 className="text-xl">文曲天机专业版</h1>
          <button className="text-sm">设置</button>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 左侧表单区域 */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-white">
                输入生辰信息
              </h2>
              <BirthForm onSubmit={handleSubmit} />
            </div>
          </div>

          {/* 右侧命盘显示区域 */}
          <div className="lg:w-2/3">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 min-h-[800px] flex items-center justify-center">
              {chart ? (
                <AstroChart chart={chart} />
              ) : (
                <div className="text-center text-gray-400">
                  <p className="text-lg">请输入生辰信息生成命盘</p>
                  <p className="text-sm mt-2">在左侧填写出生年月日时和性别信息</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 底部功能按钮 */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-700">
            常用功能
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-700">
            飞星
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-700">
            三合
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-700">
            四化
          </button>
          <button className="px-4 py-2 bg-gray-800 text-white rounded border border-gray-700">
            快捷排盘
          </button>
        </div>
      </div>
    </div>
  );
} 