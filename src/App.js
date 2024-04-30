import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styles from "./App.module.css";
import Cards from "./Cards.jsx";
import Filter from "./Filter.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState("");

  useEffect(() => {
    axios(`https://fakestoreapi.com/products`).then((res) => {
      setData(res.data);
    });
  });

  const filter = (category) => {
    setFilterData(category);
  };

  const selectFilehandle = () => {
    return filterData === ""
      ? data
      : data.filter((el) => el.category === filterData);
  };
  return (
    <Fragment>
      <Filter filtration={filter} />
      <div className={styles.cardContainer}>
        <Cards dataList={selectFilehandle()} />
      </div>
    </Fragment>
  );
};

export default App;
