import React, {useState} from 'react';

function SearchBar (props) {
  const [term, setTerm] = useState('')

  const onInputChange = event => {
    setTerm(event.target.value );
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(term);
  };

  return (
      <div className='search-bar ui segment'>
        <form action='' className='ui form' onSubmit={onFormSubmit}>
          <div className='field'>
            <label htmlFor=''>Video Search</label>
            <input
                type='text'
                value={term}
                onChange={onInputChange}
            />
          </div>
        </form>
      </div>
  );
}

export default SearchBar;
