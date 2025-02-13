import React from 'react';
import { useDrop } from 'react-dnd';
import useCalculatorStore from '../store/useCalculatorStore';
import DraggableButton from './DraggableButton';
import ResultDisplay from './ResultDisplay';

const Calculator = () => {
  const { buttons, result, addButton, removeButton, updateResult, resetCalculator } = useCalculatorStore();
  
  const handleButtonClick = (button) => {
    if (button === 'C') {
      resetCalculator();
    } else if (button === '=') {
      try {
        updateResult(eval(result).toString());
      } catch (error) {
        updateResult('Error');
      }
    } else {
      updateResult(result === '0' ? button : result + button);
    }
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'BUTTON',
    drop: (item) => {
      removeButton(item.index);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className="flex flex-col items-center p-6 bg-gray-100 w-full max-w-xs mx-auto rounded-lg shadow-lg">
      <ResultDisplay result={result} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        {buttons.map((button, index) => (
          <DraggableButton key={index} button={button} index={index} />
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {['C', '=', '+', '-', '*', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((btn) => (
          <button
            key={btn}
            onClick={() => handleButtonClick(btn)}
            className="p-4 m-2 bg-blue-500 text-white rounded shadow-lg"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
