'use client';

import React, { useState } from 'react';
import { AstroChart } from '@/components/Chart/AstroChart';

export default function TestPage() {
  const [birthTime, setBirthTime] = useState<Date>(new Date('1990-01-01T12:00:00'));

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [date, time] = e.target.value.split('T');
    setBirthTime(new Date(`${date}T${time || '12:00:00'}`));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          选择出生日期时间：
        </label>
        <input
          type="datetime-local"
          className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={birthTime.toISOString().slice(0, 16)}
          onChange={handleDateChange}
        />
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          当前选择：{birthTime.toLocaleString()}
        </p>
      </div>

      <AstroChart birthTime={birthTime} />
    </div>
  );
} 