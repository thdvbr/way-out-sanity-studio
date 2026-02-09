import './typography.css';

export const mainStyle = (props) => {
  return (
    <span
      style={{
        fontFamily: 'Averia Serif Regular',
        fontSize: '1.3em',
        fontWeight: 500,
        lineHeight: '1.2em',
      }}>
      {props.children}
    </span>
  );
};
export const secondaryStyle = (props) => {
  return (
    <span
      style={{
        fontFamily: 'Agrandir Narrow',
        fontSize: '1.313em',
        fontWeight: 400,
        lineHeight: '1.3em',
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
  );
};

export const quoteStyle = (props) => {
  return (
    <span
      style={{
        fontFamily: 'OPTIArtCraft',
        fontSize: '1.5em',
        lineHeight: '1.315em',
        marginLeft: '20px',
        marginRight: '20px',
      }}>
      {props.children}
    </span>
  );
};

export const speakerStyle = (props) => {
  return (
    <span
      style={{
        fontFamily: 'Agrandir Narrow',
        fontSize: '0.9em',
        fontWeight: 900,
        lineHeight: '1.315em',
      }}>
      {props.children}
    </span>
  );
};
