import React from 'react';
import styled from 'styled-components';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const TERTIARY = 'tertiary';

const WHITE = '#FFFFFF';
const RED = '#FF665E';
const BLUE = '#1792C1'
const BLACK = '#000000';

const EXTRASMALL = 'extra-small';
const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';
const EXTRALARGE = 'extra-large';

const SVG = styled.svg`
  overflow: visible;
`;

class Icon extends React.Component {
  render () {
    return (
      <SVG {...this.getProps()}>
        {this.renderIcon()}
      </SVG>
    );
  }

  getProps () {
    let iconSize;
    const props = this.props;
    const size = props.size;

    if (props.customSize) {
      iconSize = props.customSize;
    } else {
      switch (size) {
        case EXTRASMALL:
          iconSize = {
            width: '12px',
            height: '12px',
            viewBox: '0 0 20 20'
          }
          break;
        case SMALL:
          iconSize = {
            width: '16px',
            height: '16px',
            viewBox: '0 0 20 20'
          }
          break;
        case MEDIUM:
          iconSize = {
            width: '24px',
            height: '24px',
            viewBox: '0 0 20 20'
          }
          break;
        case LARGE:
          iconSize = {
            width: '32px',
            height: '32px',
            viewBox: '0 0 20 20'
          }
          break;
        case EXTRALARGE:
          iconSize = {
            width: '48px',
            height: '48px',
            viewBox: '0 0 20 20'
          }
          break;
        default: {
          break;
        }
      }
    }

    return {
      ...iconSize,
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg'
    }
  }

  renderIcon () {
    let color = RED;
    const type = this.props.type;

    if (type === SECONDARY) {
      color = BLUE;
    } else if (type === TERTIARY) {
      color = BLACK;
    }

    const iconList = {
      'right-arrow': (
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <g transform="translate(-917.000000, -240.000000)" stroke={color} strokeWidth="2">
            <g transform="translate(498.000000, 224.000000)">
              <polyline
                transform="translate(425.227273, 26.000000) rotate(-90.000000) translate(-425.227273, -26.000000) "
                points="416.5 21.5 425.227273 30.5 433.954545 21.5">
              </polyline>
            </g>
          </g>
        </g>
      ),
      'down-arrow': (
        <path
          fill="none"
          fillRule="evenodd"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1l7.5 7.5L16 1"
        />
      ),
      'left-arrow': (
        <path
          fill="none"
          fillRule="evenodd"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 1L1 7l6 6"
        />
      ),
      'up-arrow': (
        <path
          fill="none"
          fill-rule="evenodd"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M 0,7 L 7,0 L 14,7"
        />
      ),
      'left-arrow-with-circle': (
        <g fill="none" fillRule="evenodd" stroke={color} transform="translate(1 1)">
          <circle cx="18" cy="18" r="18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28.8 18H7.2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.6 26.4L7.2 18l8.4-8.4" />
        </g>
      ),
      'addons': (
        <g fill='none' fillRule="evenodd" stroke={color} strokeLinecap="round" strokeLinejoin="round" transform="translate(1 1)">
          <path d="M7.225 7.723v1.689L3.613 7.17 0 9.41V0h7.225v1.345" />
          <circle cx="7.516" cy="4.345" r="3" />
          <path d="M7.5 3.5v2M6.5 4.5h2" />
        </g>
      ),
      'massage': (
        <g fill='none' fillRule="evenodd" stroke={color} strokeLinecap="round" transform="translate(1 1)">
          <path strokeLinejoin="round" d="M2.182 5.455l1.266-2.182L6.545 5.33" />
          <path d="M0 9.273h7.09" />
          <path strokeLinejoin="round" d="M.545 7.09H7.8l1.446 1.092 2.21-.827" />
          <circle cx="9.273" cy="4.364" r="1.091" />
          <circle cx="4.909" cy="1.091" r="1.091" />
        </g>
      ),
      'location': (
        <path
          fill='none'
          fillRule="evenodd"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.11 11.105l4.063-9.93L.107 4.888l4.98 1.199z"
        />
      ),
      'expert': (
        <g fill='none' fillRule="evenodd" stroke={color}>
          <path d="M4.484 8.305L1.507 10.09a1.043 1.043 0 0 0-.507.894v1.496h10.435v-1.496c0-.367-.193-.706-.507-.895L7.951 8.304" />
          <path strokeLinecap="square" d="M6.217 8.826a3.13 3.13 0 0 1-3.13-3.13V4.13a3.13 3.13 0 1 1 6.26 0v1.566a3.13 3.13 0 0 1-3.13 3.13z" />
        </g>
      ),
      'expert-multiple': (
        <g fill="none" fillRule="evenodd" stroke={color} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M23.788 21.148H33v-5.67c0-.986-.522-1.9-1.377-2.406l-4.11-2.44" />
          <path d="M18.815 4.165A5.088 5.088 0 0 1 23.545 1c2.812 0 5.091 2.255 5.091 5.037v1.44c0 2.781-2.279 5.036-5.09 5.036a4.94 4.94 0 0 1-2.182-.495" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.889 18.778l-7.111 3.555C1.738 23.164 1 24.365 1 25.89v5.333h26.667V25.89c0-1.523-.738-2.724-1.778-3.556l-7.111-3.555" />
          <path strokeLinecap="square" d="M14.09 19.709c-4.015 0-7.272-3.222-7.272-7.196V9.635c0-3.974 3.257-7.196 7.273-7.196s7.273 3.222 7.273 7.196v2.878c0 3.974-3.257 7.196-7.273 7.196z" />
        </g>
      ),
      'payment': (
        <g fill="none" fillRule="evenodd" stroke={color} strokeLinecap="square" strokeWidth="2">
          <path d="M1 5h24M1 9h24M23.727 19H3.273C2.017 19 1 18.105 1 17V3c0-1.105 1.017-2 2.273-2h20.454C24.983 1 26 1.895 26 3v14c0 1.105-1.017 2-2.273 2zM5 12h5M18 14h1" />
        </g>
      )
    }

    return iconList[this.props.name]
  }
}

Icon.defaultProps = {
  size: EXTRASMALL,
  type: PRIMARY
}

export default Icon;