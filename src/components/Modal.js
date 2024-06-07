import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAllowance, addDeduction, updateAllowance, updateDeduction } from '../store';

const Modal = ({ type, isEditing, index, item, onClose }) => {
  const [amount, setAmount] = useState(isEditing ? item.amount : '');
  const [description, setDescription] = useState(isEditing ? item.description : '');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newItem = { description, amount: parseFloat(amount) };
    if (type === 'allowance') {
      isEditing
        ? dispatch(updateAllowance({ index, allowance: newItem }))
        : dispatch(addAllowance(newItem));
    } else {
      isEditing
        ? dispatch(updateDeduction({ index, deduction: newItem }))
        : dispatch(addDeduction(newItem));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="p-8 bg-white rounded shadow-lg">
        <h2 className="mb-4 text-sm font-bold">{isEditing ? 'Edit' : 'Add'} {type}</h2>
        <div className="mb-4">
          <label className="mb-2 text-xs font-bold text-blue-500">Earnings Name</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 text-xs border"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 text-xs font-bold text-blue-500">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 text-xs border"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 mr-2 text-xs text-blue-500 bg-gray-100 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 text-xs text-white bg-blue-500 rounded">{isEditing ? 'Save' : 'Add'}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
