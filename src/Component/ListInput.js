import React, { useState } from 'react';

const ListInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    alert(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      setError('Please enter a value');
    } else {
      setError('');
      // Perform your form submission logic here
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ListInput;
