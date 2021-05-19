import React from 'react';

import { ButtonProps } from '../types';

import s from './styles/button.module.css';

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? s['storybook-button--primary'] : s['storybook-button--secondary'];
  console.log(s);
  console.log(mode);
  return (
    <button
      type="button"
      className={[s['storybook-button'], s[`storybook-button--${size}`], mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
