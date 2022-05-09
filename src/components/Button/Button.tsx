import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  title: string
  onClick: () => void
  disabled?: boolean
}

const Button:FC<ButtonProps> = ({ title, onClick, disabled }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {title}
  </button>
);

export default Button;
