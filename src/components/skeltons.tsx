export function PriceCardSkeleton() {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-lg bg-white p-6 shadow-md`}
    >
      <div className="flex-1">
        <div className="my-4 h-6 w-1/2 rounded-md bg-gray-200"></div>
      </div>
      <div className="h-10 w-full rounded bg-gray-200"></div>
    </div>
  );
}

export function PriceListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <PriceCardSkeleton />
    </div>
  );
}