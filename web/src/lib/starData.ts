import { Star, StarType } from '@/types/astro';

// 主星数据
export const MAIN_STARS: Star[] = [
  { name: '紫微', type: StarType.MAIN },
  { name: '天机', type: StarType.MAIN },
  { name: '太阳', type: StarType.MAIN },
  { name: '武曲', type: StarType.MAIN },
  { name: '天同', type: StarType.MAIN },
  { name: '廉贞', type: StarType.MAIN },
  { name: '天府', type: StarType.MAIN },
  { name: '太阴', type: StarType.MAIN },
  { name: '贪狼', type: StarType.MAIN },
  { name: '巨门', type: StarType.MAIN },
  { name: '天相', type: StarType.MAIN },
  { name: '天梁', type: StarType.MAIN },
  { name: '七杀', type: StarType.MAIN },
  { name: '破军', type: StarType.MAIN }
];

// 辅星数据
export const AUXILIARY_STARS: Star[] = [
  { name: '文昌', type: StarType.AUXILIARY },
  { name: '文曲', type: StarType.AUXILIARY },
  { name: '左辅', type: StarType.AUXILIARY },
  { name: '右弼', type: StarType.AUXILIARY },
  { name: '天魁', type: StarType.AUXILIARY },
  { name: '天钺', type: StarType.AUXILIARY },
  { name: '禄存', type: StarType.AUXILIARY },
  { name: '天马', type: StarType.AUXILIARY },
  { name: '擎羊', type: StarType.AUXILIARY },
  { name: '陀罗', type: StarType.AUXILIARY },
  { name: '火星', type: StarType.AUXILIARY },
  { name: '铃星', type: StarType.AUXILIARY }
];

// 杂耀数据
export const MISC_STARS: Star[] = [
  { name: '地空', type: StarType.MISC },
  { name: '地劫', type: StarType.MISC },
  { name: '台辅', type: StarType.MISC },
  { name: '封诰', type: StarType.MISC },
  { name: '天哭', type: StarType.MISC },
  { name: '天虚', type: StarType.MISC },
  { name: '龙池', type: StarType.MISC },
  { name: '凤阁', type: StarType.MISC },
  { name: '红鸾', type: StarType.MISC },
  { name: '天喜', type: StarType.MISC },
  { name: '孤辰', type: StarType.MISC },
  { name: '寡宿', type: StarType.MISC },
  { name: '天刑', type: StarType.MISC },
  { name: '天姚', type: StarType.MISC },
  { name: '天德', type: StarType.MISC },
  { name: '月德', type: StarType.MISC },
  { name: '天才', type: StarType.MISC },
  { name: '天寿', type: StarType.MISC }
];

// 紫微星系
export const PURPLE_STAR_SYSTEM: { [key: string]: number[] } = {
  '水二局': [1, 2, 3, 4, 5, 6],
  '木三局': [2, 3, 4, 5, 6, 7],
  '金四局': [3, 4, 5, 6, 7, 8],
  '土五局': [4, 5, 6, 7, 8, 9],
  '火六局': [5, 6, 7, 8, 9, 10]
};

// 天府星系
export const HEAVENLY_HOUSE_SYSTEM: { [key: string]: number[] } = {
  '寅': [2, 3, 4, 5, 6, 7, 8, 9],
  '卯': [3, 4, 5, 6, 7, 8, 9, 10],
  '辰': [4, 5, 6, 7, 8, 9, 10, 11],
  '巳': [5, 6, 7, 8, 9, 10, 11, 12],
  '午': [6, 7, 8, 9, 10, 11, 12, 1],
  '未': [7, 8, 9, 10, 11, 12, 1, 2],
  '申': [8, 9, 10, 11, 12, 1, 2, 3],
  '酉': [9, 10, 11, 12, 1, 2, 3, 4],
  '戌': [10, 11, 12, 1, 2, 3, 4, 5],
  '亥': [11, 12, 1, 2, 3, 4, 5, 6],
  '子': [12, 1, 2, 3, 4, 5, 6, 7],
  '丑': [1, 2, 3, 4, 5, 6, 7, 8]
};

// 四化规则
export const TRANSFORMATION_RULES: { [key: string]: { [key: string]: string } } = {
  '甲': { '禄': '廉贞', '权': '破军', '科': '武曲', '忌': '太阳' },
  '乙': { '禄': '天机', '权': '天梁', '科': '紫微', '忌': '太阴' },
  '丙': { '禄': '天同', '权': '天机', '科': '文昌', '忌': '廉贞' },
  '丁': { '禄': '太阳', '权': '天同', '科': '天机', '忌': '巨门' },
  '戊': { '禄': '武曲', '权': '太阳', '科': '天同', '忌': '贪狼' },
  '己': { '禄': '太阴', '权': '武曲', '科': '天梁', '忌': '破军' },
  '庚': { '禄': '巨门', '权': '太阴', '科': '文曲', '忌': '武曲' },
  '辛': { '禄': '贪狼', '权': '巨门', '科': '左辅', '忌': '天同' },
  '壬': { '禄': '天梁', '权': '贪狼', '科': '右弼', '忌': '天机' },
  '癸': { '禄': '破军', '权': '文曲', '科': '太阴', '忌': '贪狼' }
};

// 文昌文曲位置表
export const LITERARY_STARS_POSITIONS: { [key: string]: { [key: string]: number } } = {
  '子': { '文昌': 11, '文曲': 5 },
  '丑': { '文昌': 10, '文曲': 4 },
  '寅': { '文昌': 9, '文曲': 3 },
  '卯': { '文昌': 8, '文曲': 2 },
  '辰': { '文昌': 7, '文曲': 1 },
  '巳': { '文昌': 6, '文曲': 12 },
  '午': { '文昌': 5, '文曲': 11 },
  '未': { '文昌': 4, '文曲': 10 },
  '申': { '文昌': 3, '文曲': 9 },
  '酉': { '文昌': 2, '文曲': 8 },
  '戌': { '文昌': 1, '文曲': 7 },
  '亥': { '文昌': 12, '文曲': 6 }
};

// 左辅右弼位置表
export const SUPPORT_STARS_POSITIONS: { [key: string]: { [key: string]: number } } = {
  '寅': { '左辅': 4, '右弼': 10 },
  '卯': { '左辅': 3, '右弼': 9 },
  '辰': { '左辅': 2, '右弼': 8 },
  '巳': { '左辅': 1, '右弼': 7 },
  '午': { '左辅': 12, '右弼': 6 },
  '未': { '左辅': 11, '右弼': 5 },
  '申': { '左辅': 10, '右弼': 4 },
  '酉': { '左辅': 9, '右弼': 3 },
  '戌': { '左辅': 8, '右弼': 2 },
  '亥': { '左辅': 7, '右弼': 1 },
  '子': { '左辅': 6, '右弼': 12 },
  '丑': { '左辅': 5, '右弼': 11 }
};

// 天魁天钺位置表
export const NOBLE_STARS_POSITIONS: { [key: string]: { [key: string]: number } } = {
  '甲': { '天魁': 2, '天钺': 8 },
  '乙': { '天魁': 3, '天钺': 7 },
  '丙': { '天魁': 4, '天钺': 6 },
  '丁': { '天魁': 5, '天钺': 5 },
  '戊': { '天魁': 6, '天钺': 4 },
  '己': { '天魁': 7, '天钺': 3 },
  '庚': { '天魁': 8, '天钺': 2 },
  '辛': { '天魁': 9, '天钺': 1 },
  '壬': { '天魁': 10, '天钺': 12 },
  '癸': { '天魁': 11, '天钺': 11 }
};

// 禄存位置表
export const LUCK_STORAGE_POSITIONS: { [key: string]: number } = {
  '甲': 3,
  '乙': 4,
  '丙': 6,
  '丁': 7,
  '戊': 6,
  '己': 7,
  '庚': 9,
  '辛': 10,
  '壬': 12,
  '癸': 1
};

// 天马位置表
export const HEAVENLY_HORSE_POSITIONS: { [key: string]: number } = {
  '寅申': 2,
  '巳亥': 5,
  '午子': 8,
  '卯酉': 11
};

// 空劫位置表
export const VOID_STARS_POSITIONS: { [key: string]: { [key: string]: number } } = {
  '寅申': { '地空': 12, '地劫': 6 },
  '巳亥': { '地空': 9, '地劫': 3 },
  '子午': { '地空': 6, '地劫': 12 },
  '卯酉': { '地空': 3, '地劫': 9 }
};

// 台辅封诰位置表
export const OFFICIAL_STARS_POSITIONS: { [key: string]: { [key: string]: number } } = {
  '寅申': { '台辅': 9, '封诰': 3 },
  '巳亥': { '台辅': 6, '封诰': 12 },
  '子午': { '台辅': 3, '封诰': 9 },
  '卯酉': { '台辅': 12, '封诰': 6 }
};

// 哭虚位置表
export const SORROW_STARS_POSITIONS: { [key: string]: { [key: string]: number } } = {
  '寅申': { '天哭': 7, '天虚': 1 },
  '巳亥': { '天哭': 4, '天虚': 10 },
  '子午': { '天哭': 1, '天虚': 7 },
  '卯酉': { '天哭': 10, '天虚': 4 }
};

// 龙池凤阁位置表
export const DRAGON_PHOENIX_POSITIONS: { [key: string]: { [key: string]: number } } = {
  '寅申': { '龙池': 4, '凤阁': 10 },
  '巳亥': { '龙池': 1, '凤阁': 7 },
  '子午': { '龙池': 10, '凤阁': 4 },
  '卯酉': { '龙池': 7, '凤阁': 1 }
};

// 红鸾天喜位置表
export const MARRIAGE_STARS_POSITIONS: { [key: string]: { [key: string]: number } } = {
  '子': { '红鸾': 3, '天喜': 9 },
  '丑': { '红鸾': 2, '天喜': 8 },
  '寅': { '红鸾': 1, '天喜': 7 },
  '卯': { '红鸾': 12, '天喜': 6 },
  '辰': { '红鸾': 11, '天喜': 5 },
  '巳': { '红鸾': 10, '天喜': 4 },
  '午': { '红鸾': 9, '天喜': 3 },
  '未': { '红鸾': 8, '天喜': 2 },
  '申': { '红鸾': 7, '天喜': 1 },
  '酉': { '红鸾': 6, '天喜': 12 },
  '戌': { '红鸾': 5, '天喜': 11 },
  '亥': { '红鸾': 4, '天喜': 10 }
};

// 孤辰寡宿位置表
export const LONELY_STARS_POSITIONS: { [key: string]: { [key: string]: number } } = {
  '寅申': { '孤辰': 10, '寡宿': 4 },
  '巳亥': { '孤辰': 7, '寡宿': 1 },
  '子午': { '孤辰': 4, '寡宿': 10 },
  '卯酉': { '孤辰': 1, '寡宿': 7 }
}; 