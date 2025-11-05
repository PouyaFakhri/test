import { create } from "zustand";

interface SidebarState {
  isLeftCollapsed: boolean;
  isRightCollapsed: boolean;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isLeftCollapsed: false,
  isRightCollapsed: false,
  toggleLeftSidebar: () =>
    set((state) => ({ isLeftCollapsed: !state.isLeftCollapsed })),
  toggleRightSidebar: () =>
    set((state) => ({ isRightCollapsed: !state.isRightCollapsed })),
}));