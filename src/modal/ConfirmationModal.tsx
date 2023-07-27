import React from "react";
import toast from "react-hot-toast";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationModal: React.FC<Props> = ({ onConfirm, onCancel }) => {
  return (
    <div>
      <div>Are you sure you want to delete the cart?</div>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ConfirmationModal;
