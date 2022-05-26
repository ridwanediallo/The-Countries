import React from 'react';
import { Form } from 'react-bootstrap';

const Search = ({ query, queryChangeHandler }) => {
  return (
    <Form className='container'>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={query}
          placeholder="Search a country"
          onChange={queryChangeHandler}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
