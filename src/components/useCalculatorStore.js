import create from 'zustand';

const useCalculatorStore = create((set) => ({
  buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C'],
  result: '0',
  addButton: (button) => set((state) => ({ buttons: [...state.buttons, button] })),
  removeButton: (index) => set((state) => {
    const newButtons = state.buttons.filter((_, idx) => idx !== index);
    return { buttons: newButtons };
  }),
  updateResult: (newResult) => set({ result: newResult }),
  resetCalculator: () => set({ result: '0' }),
}));

export default useCalculatorStore;
