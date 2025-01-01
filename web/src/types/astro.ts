// 宫位类型
export interface Palace {
  position: number;  // 位置（1-12）
  name: string;     // 宫位名称
  stars: Star[];    // 宫位中的星耀
}

// 星耀类型
export interface Star {
  name: string;     // 星耀名称
  type: StarType;   // 星耀类型
  brightness?: number; // 星耀亮度（1-4）
  transformations?: string[]; // 四化信息
}

// 星耀类型枚举
export enum StarType {
  MAIN = 'main',      // 主星
  AUXILIARY = 'aux',  // 辅星
  MISC = 'misc'       // 杂耀
}

// 命盘类型
export interface Chart {
  palaces: Palace[];  // 十二宫位
  fiveElements: string; // 五行局
  mainPalace: number;  // 命宫位置
  bodyPalace: number;  // 身宫位置
  birthTime: Date;     // 出生时间
} 