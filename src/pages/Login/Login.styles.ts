import { SxProps } from '@mui/material';

import grayPattern from '../../assets/levva-gray-pattern-vertical.png';

export const containerStyles: SxProps = {
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

export const formStyles: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
};
