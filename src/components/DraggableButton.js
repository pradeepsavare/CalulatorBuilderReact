import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableButton = ({ button, index }) => {
  const [, drag] = useDrag(() => ({
    type: 'BUTTON',
    item: { index },
  }));

  return (
    <button ref={drag} className="p-4 m-2 bg-blue-500 text-white rounded shadow-lg">
      {button}
    </button>
  );
};

export default DraggableButton;
