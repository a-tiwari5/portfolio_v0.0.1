import HomeScreenDock from "@/components/HomeScreenDock";
import { WindowManager } from "@/components/WindowManager";

/**
 * Home Page (Server Component)
 * Main portfolio page with interactive window system
 */
export default function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center font-sans relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1687042277586-971369d3d241?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Window Manager - Handles all window components */}
      <WindowManager />

      {/* Dock at the bottom */}
      <HomeScreenDock />
    </div>
  );
}
