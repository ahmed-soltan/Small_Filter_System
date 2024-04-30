import React, { useState , Fragment } from "react";
import Form from "react-bootstrap/Form";
import styles from './filter.module.css'
const Filter = ({filtration}) => {
    const [filter , setFilter] = useState("")
    const showResult = (e) =>{
        setFilter(e.target.value)
        filtration(e.target.value)
    }
  return (
    <Fragment>
      <Form.Select className={styles.select} aria-label="Default select example" onClick={showResult}>
        <option value="">All Categories</option>
        <option value="men's clothing">men's clothing</option>
        <option value="women's clothing">women's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
      </Form.Select>
    </Fragment>
  );
};

export default Filter;
