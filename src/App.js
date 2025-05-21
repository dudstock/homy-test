import { useState } from 'react';
import { _isNumber, _isNumberInteger, _isArrayEmpty } from './utils';
import './App.css';

const App = () => {
  const [numberList, setNumberList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isInputValueError, setIsInputValueError] = useState(false);
  const [buttonActionError, setButtonActionError] = useState(null);

  // on change Input func
  const onChangeInput = (e) => {
      // check if value is not number or not integer
      if (!_isNumber(e.target.value) || !_isNumberInteger(e.target.value) || e.target.value.indexOf('.') !== -1) {
          // set error state
          setIsInputValueError(true);

          setInputValue(e.target.value);
      } else {
          // set valid number to input state
          setInputValue(Number(e.target.value));

          // is error state is true - set him to false
          isInputValueError && setIsInputValueError(false);
      }
      // remove action error message when we add any input changes
      buttonActionError && setButtonActionError(null);
  };

  // add number to list func
  const addNumber = () => {
      if (numberList.indexOf(inputValue) !== -1) {
          // action error message if Number is already exist in the list
          setButtonActionError('This Number is already exist in the list');
      } else {
          // add number to list
          setNumberList([...numberList, inputValue]);

          // clear input field
          setInputValue('');

          // remove action error if still exist
          buttonActionError && setButtonActionError(null);
      }
  };

  // remove number from list func
  const removeNumber = () => {
    const index = numberList.indexOf(inputValue);
    // check if added number is exist in the list
    if (index !== -1) {
        // create new list
        let newList = [...new Set(numberList)];

        // remove chosen number from the new list
        newList.splice(index, 1);

        // set new list
        setNumberList([...newList]);

        // clear input field
        setInputValue('');

        // remove action error if still exist
        buttonActionError && setButtonActionError(null);
    } else {
        // if not exist - set action error message if Number is not exist in the list
        setButtonActionError('This Number is NOT exist in the list');
    }
  };

  const getAverage = () => {
      // get average number
      return parseFloat((numberList.reduce((a, b) => a + b, 0) / numberList.length).toFixed(2));
  };

  return (
    <div className="app">
        <div className="number-block">
            <input
                type="number"
                value={inputValue}
                onChange={(event) => onChangeInput(event)}
            />
            {isInputValueError && <div className="error-message">
                Please add correct number
            </div>}
            {buttonActionError && <div className="error-message">
                {buttonActionError}
            </div>}
            <div className="btn-container">
                <button
                    className={`btn btn-add ${isInputValueError || inputValue === '' ? 'disable' : ''}`}
                    onClick={() => addNumber()}
                >
                    Add
                </button>
                <button
                    className={`btn btn-remove ${isInputValueError || inputValue === '' ? 'disable' : ''}`}
                    onClick={() => removeNumber()}
                >
                    Remove
                </button>
            </div>
            <div className="result-block">
                <div>
                    <span>List of numbers:</span>
                    <strong>{_isArrayEmpty(numberList) ? 'None' : numberList.sort((a,b) => (a - b)).join(', ')}</strong>
                </div>
                <div>
                    <span>Average number:</span>
                    <strong>{_isArrayEmpty(numberList) ? 'None' : getAverage()}</strong>
                </div>
                <div>
                    <span>Max number from the list:</span>
                    <strong>{_isArrayEmpty(numberList) ? 'None' : Math.max(...numberList)}</strong>
                </div>
                <div>
                    <span>Min number from the list:</span>
                    <strong>{_isArrayEmpty(numberList) ? 'None' : Math.min(...numberList)}</strong>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
