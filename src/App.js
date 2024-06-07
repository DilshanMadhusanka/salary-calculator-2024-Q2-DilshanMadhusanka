import React from 'react';
import SalaryCalculator from './components/SalaryCalculator';
import SalarySummary from './components/SalarySummary';

const App = () => {
  return (
    <div className="container p-4 mx-auto mt-10">
      <div className="flex flex-col justify-center gap-4 lg:flex-row">
        <div className="w-full p-6 border rounded-lg bg-gray-50 lg:w-2/5">
          <SalaryCalculator />
        </div>
        <div className="w-full p-6 bg-white border rounded-lg lg:w-1/3">
          <SalarySummary />
        </div>
      </div>
    </div>
  );
};

export default App;
