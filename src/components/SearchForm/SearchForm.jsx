import { useState } from "react";
import { toast } from 'react-toastify';
import { BiSearch } from 'react-icons/bi';
import { FormContainer, Form, FormInput, FormButton } from "./SearchForm.styled";
import PropTypes from 'prop-types';

export const SearchForm = ({onSubmit, onChange}) => {
  const [query, setQuery] = useState('');

  /* handleQueryChange викликається при зміні значення в 
  полі вводу і оновлює стейт query, а також передає 
  змінене значення до батьківського компонента за допомогою 
  функції onChange */
  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
    onChange(e.currentTarget.value.toLowerCase());
  };

  /* handleSubmit викликається при поданні форми і передає
   значення запиту до батьківського компонента за допомогою
   функції onSubmit. Перед виконанням перевіряє, чи введено
   значення запиту і виводить повідомлення, якщо ні */ 
  const handleSubmit = e => {
    e.preventDefault();
    
    if (query.trim() === '') {
      return toast.warn('Enter your query in the search bar!');
    };    

    onSubmit(query);
    setQuery('');
  };
  
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="query" 
          value={query}        
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleQueryChange}        
        />

        <FormButton type="submit">
          <BiSearch size={23}/>
        </FormButton>
      </Form>
    </FormContainer>
  );
};

SearchForm.propsType = {
  onSubmit: PropTypes.func.isRequired,
}