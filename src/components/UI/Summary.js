import Modal from './Modal';
import classes from './Summary.module.css';
import { useContext } from 'react';

const Summary = (props) => {

  return (
    <Modal hide={props.hide}>
    <div className={classes.total}>
        <h1>Suryanshoo Kaushal</h1>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.hide}>Close</button>
      <button className={classes.button} >Hi there</button>
    </div>
  </Modal>
  );
};

export default Summary;