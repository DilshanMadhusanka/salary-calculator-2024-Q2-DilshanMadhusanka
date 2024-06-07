import React from 'react';
import { useSelector } from 'react-redux';

const SalarySummary = () => {
  const basicSalary = useSelector((state) => state.salary.basicSalary);
  const allowances = useSelector((state) => state.salary.allowances);
  const deductions = useSelector((state) => state.salary.deductions);

  const grossEarning = basicSalary + allowances.reduce((acc, curr) => acc + curr.amount, 0);
  const grossDeduction = deductions.reduce((acc, curr) => acc + curr.amount, 0);
  const employeeEPF = basicSalary * 0.08;
  const apit = basicSalary * 0.025;
  const netSalary = grossEarning - grossDeduction - employeeEPF - apit;
  const employerEPF = basicSalary * 0.12;
  const employerETF = basicSalary * 0.03;
  const ctc = basicSalary + employerEPF + employerETF;

  return (
    <div>
      <h2 className="mb-4 text-sm font-bold">Your Salary</h2>
      <div className="flex justify-between">
        <h2 className="mb-4 text-xs">Items</h2>
        <h2 className="mb-4 text-xs">Amount</h2>
      </div>
      <div className="mb-4">
        <div className="flex justify-between mb-1 text-sm">
          <span>Basic Salary</span>
          <span>{basicSalary.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1 text-sm">
          <span>Gross Earning</span>
          <span>{grossEarning.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1 text-sm">
          <span>Gross Deduction</span>
          <span>-{grossDeduction.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-1 text-sm">
          <span>Employee EPF (8%)</span>
          <span>-{employeeEPF.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>APIT</span>
          <span>-{apit.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex p-3 mb-4 text-xs font-bold border rounded-md justify-left">
        <span>Net Salary(Take Home)  : </span>
        <span>{netSalary.toFixed(2)}</span>
      </div>
      <h2 className="mb-3 text-xs">Contribution from the Employer</h2>
      <div>
        <div className="flex justify-between mb-1 text-sm">
          <span>Employer EPF (12%)</span>
          <span>{employerEPF.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-5 text-sm">
          <span>Employer ETF (3%)</span>
          <span>{employerETF.toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-sm">CTC (Cost to Company)</span>
        <span>{ctc.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default SalarySummary;
