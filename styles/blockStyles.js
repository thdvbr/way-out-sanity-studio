import React from 'react';
import './typography.css';

export const mainStyle = (props) => {
  return (
    <span
      style={{
        fontFamily: 'Averia Serif Regular',
        fontSize: '1.2em',
        fontWeight: 500,
        lineHeight: '1.4em',
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
export const secondaryBoldStyle = (props) => {
  return (
    <span
    style={{
      fontFamily: 'Agrandir Bold',
      fontSize: '1.4em',
      fontWeight: 500,
      lineHeight: '1.315em',
    }}>
    {props.children}
  </span>
  )
}

export const introStyle = (props) => {
  return (
    <span
      style={{
        fontFamily: 'OPTIArtCraft',
        fontSize: '1.375em',
        lineHeight: '1.315em',
      }}>
      {props.children}
    </span>
  );
};

export const copenhagenGrotesk = (props) => {
  return (
    <span
    style={{
      fontFamily: 'Copenhagen Grotesk',
      fontSize: '0.9em',
      lineHeight: '1em',
    }}>
    {props.children}
  </span>
  )
}