/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

import { ButtonProps } from '../types';

const root = css({
  fontFamily: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  fontWeight: 700,
  border: 0,
  borderRadius: '3em',
  cursor: 'pointer',
  display: 'inline-block',
  lineHeight: 1,
});

const themes = ({
  primary: css({
    color: 'white',
    backgroundColor: '#1ea7fd',
  }),
  secondary: css({
    color: '#333',
    backgroundColor: 'transparent',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
  }),
});

const sizes = {
  small: css({
    fontSize: '12px',
    padding: '10px 16px',
  }),
  medium: css({
    fontSize: '14px',
    padding: '11px 20px',
  }),
  large: css({
    fontSize: '16px',
    padding: '12px 24px',
  }),
};

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => (
  <button
    type="button"
    css={[root, sizes[size], themes[primary ? 'primary' : 'secondary']]}
    style={{ backgroundColor }}
    {...props}
  >
    {label}
  </button>
);
