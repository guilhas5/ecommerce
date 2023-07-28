import React from "react";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationModal: React.FC<Props> = ({ onConfirm, onCancel }) => {
  return (
    <div className="flex justify-center items-center z-50">
      <div className="flex flex-col bg-white p-8 rounded shadow-md">
        <div className="text-lg font-semibold mb-4">Confirmation</div>
        <div className="mb-6">Are you sure you want to delete the cart?</div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded mr-4"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
