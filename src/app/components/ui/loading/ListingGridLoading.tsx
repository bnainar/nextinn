export const ListingGridLoading = () => {
  return (
    <div className="listing-grid">
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="h-56 col-span-1 bg-slate-200 rounded-xl animate-pulse"
          ></div>
        ))}
    </div>
  );
};
