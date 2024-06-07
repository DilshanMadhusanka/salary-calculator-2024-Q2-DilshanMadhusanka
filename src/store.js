
import { configureStore, createSlice } from '@reduxjs/toolkit';

const salarySlice = createSlice({
  name: 'salary',
  initialState: {
    basicSalary: 0,
    allowances: [],
    deductions: [],
  },
  reducers: {
    setBasicSalary(state, action) {
      state.basicSalary = action.payload;
    },
    addAllowance(state, action) {
      state.allowances.push(action.payload);
    },
    addDeduction(state, action) {
      state.deductions.push(action.payload);
    },
    removeAllowance(state, action) {
      state.allowances = state.allowances.filter((_, index) => index !== action.payload);
    },
    removeDeduction(state, action) {
      state.deductions = state.deductions.filter((_, index) => index !== action.payload);
    },
    updateAllowance(state, action) {
      const { index, allowance } = action.payload;
      state.allowances[index] = allowance;
    },
    updateDeduction(state, action) {
      const { index, deduction } = action.payload;
      state.deductions[index] = deduction;
    },
  },
});

export const {
  setBasicSalary,
  addAllowance,
  addDeduction,
  removeAllowance,
  removeDeduction,
  updateAllowance,
  updateDeduction,
} = salarySlice.actions;

export const store = configureStore({
  reducer: {
    salary: salarySlice.reducer,
  },
});
