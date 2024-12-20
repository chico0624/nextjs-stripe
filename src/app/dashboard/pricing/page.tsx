import PriceList from '@/components/PriceList';
import { PriceListSkeleton } from '@/components/skeltons';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className="p-4">
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        広告非表示プラン
      </h1>

      <Suspense fallback={<PriceListSkeleton />}>
        <PriceList />
      </Suspense>
    </main>
  );
}
