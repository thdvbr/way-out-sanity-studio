import React from 'react';
import './typography.css';

export const mainStyle = (props) => {
  return (
    <span
      style={{
        fontFamily: 'Averia Serif Libre',
        fontSize: '1.2em',
        fontWeight: 500,
        lineHeight: '1.5em',
      }}>
      {props.children}
    </span>
  );
};
export const secondaryStyle = (props) => {
  return (
    <span
      style={{
        fontFamily: 'Agrandir',
        fontSize: '1.313em',
        fontWeight: 400,
        lineHeight: '1.315em',
      }}>
      {props.children}
    </span>
  );
};

export const introStyle = (props) => {
  return (
    <span
      style={{
        fontFamily: 'OPTIArtCraft',
        fontSize: '1.375em',
        lineHeight: '1.625em',
      }}>
      {props.children}
    </span>
  );
};