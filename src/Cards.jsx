import React , {Fragment} from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import styles from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Cards = ({dataList}) => {
  const showData = dataList.map((el) => {
    return (
      <Card key={el.id} className={styles.card} style={{ width: "18rem" }}>
      <Card.Img className={styles.image} variant="top" src={`${el.image}`} />
      <Card.Body className={styles.cardBody}>
        <Card.Title>{`${el.title}`} </Card.Title>
        <Card.Text>{`${
          el.description.length > 30
            ? el.description.substr(0, 50)
            : el.description
        }`}</Card.Text>
        <div className={styles.bottom}>
          <Card.Text>{`${el.price}`}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
    );
  });

  return <Fragment>{showData}</Fragment>;
};

export default Cards;
