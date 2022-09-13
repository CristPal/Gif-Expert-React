import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanInputValue = inputValue.trim();
        
        if(cleanInputValue.length <=1) return;
        
        setInputValue('');
        onNewCategory(cleanInputValue)
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar GIFs"
            value={inputValue}
            onChange= {onInputChange}
        />
    </form>
  )

};
