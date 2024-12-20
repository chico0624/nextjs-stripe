'use client';

import { formatCurrency, formatInterval } from '@/libs/util';
import { Price } from '@/types/Price';

export default function PriceCard({ price }: { price: Price }) {

  const handleChoosePlanClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
   event.preventDefault();
   const response = await fetch('/api/stripe/checkout/session', {
    method: 'POST',
    body: JSON.stringify({ priceId: price.id }),
   });
   const data = await response.json();
   window.location.href = data.url;
  };

  return (
    <div
      key={price.id}
      className="flex flex-col rounded-lg bg-white p-6 shadow-md"
    >
      <div className="flex-1">
        <p className="my-4 text-lg font-bold text-stone-950">
          {formatCurrency(price.unit_amount)} / {formatInterval(price.interval) }
        </p>
      </div>
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      onClick={handleChoosePlanClick}>
        プランを選択
      </button>
    </div>
  );
}
