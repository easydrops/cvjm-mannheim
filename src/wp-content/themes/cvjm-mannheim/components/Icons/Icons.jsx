import React from 'react';

export default function Icon({glyph, width = 32 , height = 32, className = 'icon'}){
  return (
    <svg className={className} width={width} height={height}>
      <use xlinkHref={glyph} />
    </svg>
  );
}

// some-component.jsx
/*import Icon from './icon';*/
/*import help from '../icons/icon-photo.svg';*/
let help = '#icon-photo';

<Icon glyph={help} />
