import { css } from '@emotion/css';

export const Button = css`
  background-color: rgb(var(--primary-color));
  border: 0;
  color: rgb(var(--button-color));
  font-weight: 700;
  outline: 0;

  &:focus {
    box-shadow: 0 0 0 3px rgba(var(--primary-color), 0.5);
  }

  &:hover {
    background-color: rgb(var(--primary-color-hover));
  }

  &.--size-big {
    height: 48px;
    padding: 0 24px;
  }

  &.--size-default {
    height: 40px;
    padding: 0 16px;
  }

  &.--size-small {
    height: 32px;
    padding: 0 16px;
  }

  &.--uppercase {
    text-transform: uppercase;
  }
`;
