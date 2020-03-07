import React from 'react';

import ColorSwatchButton from './ColorSwatchButton.jsx';

import styles from './ColorSwatch.scss';

const copyText = (text, other) => {
  console.log( other );
  document.execCommand('copy');
}

const ColorSwatch = (props) => {
  const {
    name,
    hex,
    rgb,
    variable,
    textColor,
    slug,
  } = props;

  return <li className={styles.colorSwatch}>
    <div className={styles.colorExample} style={{ backgroundColor: 'var(--' + slug + ', #' + hex + ')' }}></div>
    <div className={styles.swatchInfo}>
      <h3>{name}</h3>
      <table className={styles.swatchTable}>
        <tbody>
          <tr>
            <th scope="row">
              Hex
            </th>
            <td>
              <ColorSwatchButton copyText={'#' + hex} />
            </td>
          </tr>

          <tr>
            <th scope="row">
              RGB
            </th>
            <td>
              <ColorSwatchButton copyText={rgb.r + ', ' + rgb.g + ', ' + rgb.b} />
            </td>
          </tr>

          <tr>
            <th scope="row">
              Var
            </th>
            <td>
              <ColorSwatchButton copyText={variable} />
            </td>
          </tr>

          <tr>
            <th scope="row">
              <abbr className={styles.abbr} title="Text Color">Txt</abbr>
            </th>
            <td>
              <ColorSwatchButton copyText={'#' + textColor} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </li>;
};

export default ColorSwatch;
