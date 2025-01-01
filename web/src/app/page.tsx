import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">紫微斗数排盘系统</h1>
      <div className="flex gap-4">
        <Link 
          href="/chart" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          开始排盘
        </Link>
      </div>
    </main>
  );
}
