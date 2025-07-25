export function AdSidebar() {
  return (
    <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
      <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
        <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">Google Ad</div>
        <div className="text-xs text-gray-500 dark:text-gray-500">160 x 600</div>
        <div className="text-xs text-gray-500 dark:text-gray-500">(Skyscraper)</div>
      </div>
    </div>
  );
}