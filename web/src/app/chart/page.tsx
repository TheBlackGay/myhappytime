'use client';

import { AstroChart } from '@/components/Chart/AstroChart';

export default function ChartPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">紫微斗数排盘</h1>
      <AstroChart birthTime={new Date()} />
    </main>
  );
} 