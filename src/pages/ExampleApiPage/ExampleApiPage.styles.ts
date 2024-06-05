import { SxProps } from '@mui/material';

import grayPattern from '../../assets/levva-gray-pattern-vertical.png';

export const containerStyle: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: 'rgba(40, 40, 41)',
  fontFamily: "'Capitana', sans-serif",
  color: 'rgba(255, 255, 255, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '5px',
    left: '5px',
    backgroundImage: `url("${grayPattern}")`,
    width: '320px',
    height: '100vh',
  },
};

export const headingStyle: SxProps = {
  animation: 'blink-cursor 500ms steps(40) infinite normal, typing 4s steps(40) 1s normal both',
  fontSize: '6rem',
  borderRight: '2px solid rgba(255, 255, 255, 1)',
  fontFamily: "'TT Display', sans-serif !important",
  textAlign: 'center',
  margin: '0 auto',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  letterSpacing: '2px',
};

export const levvaNameStyle: SxProps = {
  animation: 'paint-word 1s 5s normal both',
};

export const footerStyle: SxProps = {
  width: '100%',
  overflow: 'hidden',
};

export const subtitleStyle: SxProps = {
  fontSize: '3rem',
  fontFamily: "'TT Display', sans-serif !important",
  fontWeight: 400,
  animation: 'slide-top 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 5s both',
};

export const pageInfoStyle: SxProps = {
  fontSize: '1.5rem',
  fontFamily: "'TT Display', sans-serif !important",
  fontWeight: 400,
  animation: 'slide-top 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 5s both',
};

export const linkStyle: SxProps = {
  display: 'block',
  marginTop: '8px',
  color: '#ffc600',
  textDecorationColor: '#ffc600',
  animation: 'slide-top 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 5.5s both',
};

export const apiDataTextStyle: SxProps = {
  fontSize: '1.5rem',
  fontFamily: "'TT Display', sans-serif !important",
};
