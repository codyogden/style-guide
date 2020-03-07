import React from 'react';

import ColorSwatch from '../components/ColorSwatch';

import styles from './Color.scss';

const swatches = [
  {
    name: 'Water',
    hex: '1F8DD6',
    rgb: {
      r: 31,
      b: 141,
      g: 214,
    },
    variable: '$color-water',
    textColor: 'FFFFFF',
  },
  {
    name: 'Grass',
    hex: '54A654',
    rgb: {
      r: 84,
      g: 166,
      b: 84,
    },
    variable: '$color-grass',
    textColor: 'FFFFFF',
  },
  {
    name: 'Grape',
    hex: '8064A2',
    rgb: {
      r: 128,
      g: 100,
      b: 162,
    },
    variable: '$color-grape',
    textColor: 'FFFFFF',
  },
  {
    name: 'Chocolate',
    hex: '4F2902',
    rgb: {
      r: 79,
      g: 41,
      b: 2,
    },
    variable: '$color-chocolate',
    textColor: 'FFFFFF',
  },
  {
    name: 'Apple',
    hex: 'CE393B',
    rgb: {
      r: 206,
      g: 57,
      b: 59,
    },
    variable: '$color-apple',
    textColor: 'FFFFFF',
  },
  {
    name: 'Clementine',
    hex: 'E26812',
    rgb: {
      r: 226,
      g: 104,
      b: 18,
    },
    variable: '$color-clementine',
    textColor: 'FFFFFF',
  },
  {
    name: 'Sunflower',
    hex: 'F2B809',
    rgb: {
      r: 242,
      g: 184,
      b: 9,
    },
    variable: '$color-sunflower',
    textColor: '202020',
  },
  {
    name: 'Gunmetal',
    hex: '807672',
    rgb: {
      r: 128,
      g: 118,
      b: 114,
    },
    variable: '$color-gunmetal',
    textColor: 'FFFFFF',
  },
  {
    name: 'White',
    hex: 'FFFFFF',
    rgb: {
      r: 255,
      g: 255,
      b: 255,
    },
    variable: '$color-white',
    textColor: '000000',
  },
  {
    name: 'Cloud',
    hex: 'FAFAFA',
    rgb: {
      r: 250,
      g: 250,
      b: 250,
    },
    variable: '$color-cloud',
    textColor: '000000',
  },
  {
    name: 'Mist',
    hex: 'EDEDED',
    rgb: {
      r: 237,
      g: 237,
      b: 237,
    },
    variable: '$color-mist',
    textColor: '000000',
  },
  {
    name: 'Fog',
    hex: '999999',
    rgb: {
      r: 153,
      g: 153,
      b: 153,
    },
    variable: '$color-fog',
    textColor: '000000',
  },
  {
    name: 'Steam',
    hex: '666666',
    rgb: {
      r: 102,
      g: 102,
      b: 102,
    },
    variable: '$color-steam',
    textColor: 'FFFFFF',
  },
  {
    name: 'Smoke',
    hex: '333333',
    rgb: {
      r: 51,
      g: 51,
      b: 51,
    },
    variable: '$color-smoke',
    textColor: 'FAFAFA',
  },
  {
    name: 'Night',
    hex: '202020',
    rgb: {
      r: 32,
      g: 32,
      b: 32,
    },
    variable: '$color-night',
    textColor: 'FAFAFA',
  },
  {
    name: 'Black',
    hex: '000000',
    rgb: {
      r: 0,
      g: 0,
      b: 0,
    },
    variable: '$color-black',
    textColor: 'FAFAFA',
  },
];

const Color = () => {
  return <>
    <h2>Color</h2>
    <p>Use of a common color palette creates a sense of unity and familiarity. This color palette is minimal, friendly, and flexible for a variety of projects.</p>
    <ul className={styles.swatchList}>
      {swatches.map((swatch) => <ColorSwatch {...swatch} key={swatch.name} />)}
    </ul>
  </>;
};

export default Color;
