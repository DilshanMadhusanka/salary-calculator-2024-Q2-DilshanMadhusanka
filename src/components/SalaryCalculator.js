import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBasicSalary, removeAllowance, removeDeduction } from '../store'; 
import Modal from './Modal';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

const SalaryCalculator = () => {
  const dispatch = useDispatch();
  const basicSalary = useSelector((state) => state.salary.basicSalary);
  const allowances = useSelector((state) => state.salary.allowances);
  const deductions = useSelector((state) => state.salary.deductions);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState(null);

  const openModal = (type, index = null, item = null) => {
    setModalType(type);
    setIsEditing(index !== null);
    setEditIndex(index);
    setEditItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditIndex(null);
    setEditItem(null);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Calculate Your Salary</h2>
      <div className="mb-4">
        <label className="mb-2 text-sm font-bold">Basic Salary</label>
        <input
          type="number"
          value={basicSalary}
          onChange={(e) => dispatch(setBasicSalary(parseFloat(e.target.value)))}
          className="w-full p-2 border"
        />
      </div>
      <div className="mb-4">
        <h3 className="mb-2 text-sm font-bold">Earnings</h3>
        <h5 className="mb-4 text-xs">Allowance, Fixed Allowance, Bonus, and etc.</h5>
        {allowances.map((allowance, index) => (
          <div key={index} className="flex items-center gap-3 mb-2 text-xs">
            <span>{allowance.description}: {allowance.amount.toFixed(2)}</span>
            <div>
              <button onClick={() => openModal('allowance', index, allowance)} className="mr-2">
                <EditIcon className="w-4 h-4" />
              </button>
              <button onClick={() => dispatch(removeAllowance(index))}>
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        <button onClick={() => openModal('allowance')} className="text-xs font-bold text-blue-500">
          + Add New Allowance
        </button>
        <p className="w-full mt-3 border-b-2"></p>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-bold">Deductions</h3>
        <p className="mb-4 text-xs">Salary Advances, Loan Deductions, and all</p>
        {deductions.map((deduction, index) => (
          <div key={index} className="flex items-center gap-3 mb-2 text-xs">
            <span>{deduction.description}: {deduction.amount.toFixed(2)}</span>
            <div>
              <button onClick={() => openModal('deduction', index, deduction)} className="mr-2">
                <EditIcon className="w-4 h-4" />
              </button>
              <button onClick={() => dispatch(removeDeduction(index))}>
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        <button onClick={() => openModal('deduction')} className="text-xs font-bold text-blue-500">
          + Add New Deduction
        </button>
      </div>
      {isModalOpen && (
        <Modal
          type={modalType}
          isEditing={isEditing}
          index={editIndex}
          item={editItem}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default SalaryCalculator;
