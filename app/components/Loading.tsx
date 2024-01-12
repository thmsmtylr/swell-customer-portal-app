export function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#fafafa]">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-b-primary-50 border-l-primary-50 border-r-primary-50 duration-500"></div>
    </div>
  );
}
