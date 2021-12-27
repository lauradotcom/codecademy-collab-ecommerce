import * as React from 'react';
import { main } from './MainButton.module.css';

const MainButton = ({ buttonText, onClick }) => {
  return (
    <button className={main} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default MainButton;
