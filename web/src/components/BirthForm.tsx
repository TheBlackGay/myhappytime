'use client';

import React, { useState } from 'react';
import { validateInput, ValidationError } from '@/lib/validate';

interface BirthFormProps {
  onSubmit: (birthTime: Date, gender: 'male' | 'female') => void;
}

export const BirthForm: React.FC<BirthFormProps> = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证输入
    const validationErrors = validateInput(date, time, gender);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // 清除错误
    setErrors([]);
    
    // 合并日期和时间
    const birthTime = new Date(`${date}T${time}`);
    onSubmit(birthTime, gender);
  };

  // 获取特定字段的错误信息
  const getFieldError = (field: string) => {
    return errors.find(error => error.field === field)?.message;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          出生日期
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
            getFieldError('date') 
              ? 'border-red-300' 
              : 'border-gray-300'
          }`}
          required
        />
        {getFieldError('date') && (
          <p className="mt-1 text-sm text-red-600">
            {getFieldError('date')}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          出生时间
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
            getFieldError('time') 
              ? 'border-red-300' 
              : 'border-gray-300'
          }`}
          required
        />
        {getFieldError('time') && (
          <p className="mt-1 text-sm text-red-600">
            {getFieldError('time')}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          性别
        </label>
        <div className="mt-1 space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className="form-radio text-indigo-600"
            />
            <span className="ml-2">男</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value as 'male' | 'female')}
              className="form-radio text-indigo-600"
            />
            <span className="ml-2">女</span>
          </label>
        </div>
        {getFieldError('gender') && (
          <p className="mt-1 text-sm text-red-600">
            {getFieldError('gender')}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        生成命盘
      </button>
    </form>
  );
}; 