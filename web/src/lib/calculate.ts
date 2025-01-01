import { Chart, Palace, Star } from '@/types/astro';
import dayjs from 'dayjs';

export function calculateChart(birthTime: Date, gender: 'male' | 'female'): Chart {
  // 这里是示例数据，实际应该根据生日时间计算
  const palaces: Palace[] = Array.from({ length: 12 }, (_, i) => ({
    position: i + 1,
    name: `宫位${i + 1}`,
    direction: getDirection(i),
    stars: [],
    flowYears: [2030 + i],
    ages: [20 + i],
    relations: {
      opposite: '对宫',
      triad: ['三合1', '三合2'],
      harmony: ['六合1'],
      conflict: ['六冲1'],
      harm: ['六害1']
    }
  }));

  return {
    palaces,
    mainPalace: '命宫',
    bodyPalace: '身宫',
    fiveElements: '五行',
    birthInfo: {
      name: '**',
      gender,
      solarTime: dayjs(birthTime).format('YYYY-MM-DD HH:mm'),
      chartTime: dayjs().format('YYYY-MM-DD HH:mm')
    }
  };
}

// 根据位置获取方位
function getDirection(position: number): string {
  const directions = [
    '正北',
    '东北',
    '正东',
    '东南',
    '正南',
    '西南',
    '正西',
    '西北',
    '正北偏东',
    '东北偏南',
    '东南偏北',
    '正南偏西'
  ];
  return directions[position] || '';
} 