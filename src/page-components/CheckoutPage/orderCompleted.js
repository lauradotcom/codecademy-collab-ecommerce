import React from 'react';
//
import * as styles from './orderCompleted.module.css';

const OrderCompleted = ({ firstName }) => {
  return (
    <main className={styles.main}>
      <h1>Order completed</h1>
      <img 
        src='https://cdn-icons-png.flaticon.com/512/1008/1008010.png' 
        alt='order completed' 
      />
      <p>{`Thank you for your order${firstName ? ` ${firstName}` : ''}!`}</p>
      <p>We'll be reviewing your order and send you an email when it's ready.</p>
    </main>
  );
}
export default OrderCompleted;
