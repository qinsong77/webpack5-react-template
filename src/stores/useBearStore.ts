import { create } from 'zustand'

type BearStore = {
  bears: number
  increasePopulation: (by: number) => void
  removeAllBears: () => void
}
export const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: (by) => set((state) => ({ bears: state.bears + by })),
  removeAllBears: () => set({ bears: 0 }),
}))
