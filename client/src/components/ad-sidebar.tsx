import { SidebarSkyscraperAd } from "@/components/google-adsense";

export function AdSidebar() {
  return (
    <div className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-10 w-40">
      <div className="bg-white dark:bg-mystic-800 rounded-lg shadow-lg p-2 border border-mystic-200 dark:border-mystic-700">
        <SidebarSkyscraperAd />
      </div>
    </div>
  );
}