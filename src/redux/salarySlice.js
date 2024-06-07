
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicSalary: 100000,
  allowances: [],
  deductions: [],
};

const salarySlice = createSlice({
  name: 'salary',
  initialState,
  reducers: {
    setBasicSalary: (state, action) => {
      state.basicSalary = action.payload;
    },
    addAllowance: (state, action) => {
      state.allowances.push(action.payload);
    },
    addDeduction: (state, action) => {
      state.deductions.push(action.payload);
    },
    reset: (state) => {
      state.basicSalary = 100000;
      state.allowances = [];
      state.deductions = [];
    },
  },
});

export const { setBasicSalary, addAllowance, addDeduction, reset } = salarySlice.actions;
export default salarySlice.reducer;
