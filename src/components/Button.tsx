import React from 'react';

interface ButtonProps {
  // eslint-disable-next-line react/require-default-props
  title?: string;
  // eslint-disable-next-line react/require-default-props
  myBgColor?: string;
}

export function Button({ title = 'Title test', myBgColor = 'red' }: ButtonProps) {
  // javascript lógica

  return (
    <button style={{ backgroundColor: myBgColor }} type="button">
      {title}
    </button>
  );
}
