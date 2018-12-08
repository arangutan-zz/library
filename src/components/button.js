import React from 'react';
import styled, { keyframes } from 'styled-components';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const TERTIARY = 'tertiary';
const BACK = 'back';

const WHITE = '#ffffff';
const RED = '#ff665e';

const arrowAnim = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-5px);
  }
`;

const getBackgroundColor = (type) => {
  let backgroundColor;

  if (type === PRIMARY) {
    backgroundColor = RED;
  } else if (type === SECONDARY) {
    backgroundColor = WHITE;
  } else if (type === TERTIARY) {
    backgroundColor = 'rgba(255, 255, 255, 0.2)';
  }

  return backgroundColor;
}

const getFontColor = (type) => {
  let fontColor;

  if (type === PRIMARY || type === TERTIARY) {
    fontColor = WHITE;
  } else {
    fontColor = RED;
  }

  return fontColor;
}

const getHoverFontColor = (type) => {
  let fontAndBorderColor;

  if (type === PRIMARY || type === BACK) {
    fontAndBorderColor = RED;
  } else {
    fontAndBorderColor = WHITE;
  }

  return fontAndBorderColor;
}

const getHoverBackgroundColor = (type) => {
  let backgroundColor;

  if (type === PRIMARY) {
    backgroundColor = WHITE;
  } else if (type === SECONDARY) {
    backgroundColor = RED;
  }

  return backgroundColor;
}

const getBorderColor = (type) => {
  let borderColor;

  if (type === PRIMARY || type === SECONDARY) {
    borderColor = RED;
  } else {
    borderColor = WHITE;
  }

  return borderColor;
}

const getWidth = (props) => {
  let width;

  if (props.customWidth) {
    width = props.customWidth;
  } else if (props.fullWidth) {
    width = '100%';
  } else {
    width = 'inherit';
  }

  return width;
}

const getPadding = (props) => {
  let padding;

  if (props.buttonType === BACK || props.customWidth) {
    padding = 0;
  } else {
    padding = '19px 56px';
  }

  return padding;
}

const StyledButton = styled.button`
  background-color: ${props => getBackgroundColor(props.buttonType)};
  border-radius: 100px;
  color:  ${props => getFontColor(props.buttonType)};
  border: 1px solid  ${props => getBorderColor(props.buttonType)};
  cursor: pointer;
  font-family: ProximaNova;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  height: ${props => props.buttonType !== BACK ? '50px' : 'inherit'};
  line-height: 1.17;
  letter-spacing: 0.5px;
  padding: ${props => getPadding(props)};
  text-align: center;
  transition: background-color .5s, color .5s;
  width: ${props => getWidth(props)};

  &:hover {
    background-color: ${props => getHoverBackgroundColor(props.buttonType)};
    color: ${props => getHoverFontColor(props.buttonType)};
  }

  span {
    margin-left: 10px;
    vertical-align: middle;
  }

  svg {
    vertical-align: middle;
  }

  &:hover svg {
    animation: ${arrowAnim} 0.5s infinite;;
  }
`;

class Button extends React.Component {
  render () {
    return (
      <StyledButton {...this.props}>
        {this.renderImage()}
        {this.renderText()}
      </StyledButton>
    );
  }

  renderImage () {
    let image;

    if (this.props.buttonType === BACK) {
      image = (
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
          <path
            fill="none"
            fillRule="evenodd"
            stroke="#FF665E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 1L1 7l6 6"
          />
        </svg>
      );
    }

    return image;
  }

  renderText () {
    let text = this.props.text;

    if (this.props.buttonType === BACK) {
      text = <span>Back</span>;
    }

    return text;
  }
}

Button.defaultProps = {
  buttonType: 'primary',
  className: 'btn',
  disabled: false,
  fullWidth: false,
  text: 'Submit',
  type: 'button'
}

export default Button;