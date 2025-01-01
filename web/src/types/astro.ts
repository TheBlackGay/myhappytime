// 宫位类型
export interface Palace {
  name: string;
  position: number;
  direction: string;
  stars: Star[];
  flowYears: number[];
  ages: number[];
  relations: PalaceRelations;
}

// 宫位关系类型
export interface PalaceRelations {
  opposite: string;
  triad: string[];
  harmony: string[];
  conflict: string[];
  harm: string[];
}

// 星耀类型
export interface Star {
  name: string;
  type: 'main' | 'auxiliary' | 'misc';
  transformations?: string[];
}

// 命盘类型
export interface Chart {
  palaces: Palace[];
  mainPalace: string;
  bodyPalace: string;
  fiveElements: string;
  birthInfo: BirthInfo;
}

export interface BirthInfo {
  name: string;
  gender: 'male' | 'female';
  solarTime: string;
  chartTime: string;
} 