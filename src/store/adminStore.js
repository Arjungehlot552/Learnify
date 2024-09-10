import { create } from 'zustand';

const useAdminStore = create((set) => ({
  adminEmail: 'himanshi@gmail.com',
  adminPassword: '654321',
  isAdmin: false,
  setIsAdmin: (isAdmin) => set({ isAdmin })
}));

export default useAdminStore;
