import { css } from '@emotion/css';

export const Button = css`
  align-items: center;
  border: 0;
  border-radius: 10px;
  color: rgb(var(--button-color));
  display: flex;
  font-family: var(--font-family-roboto);
  font-size: var(--button-font-size);
  font-weight: 300;
  justify-content: center;
  outline: 0;
  transition:
    0.2s background-color linear,
    0.2s box-shadow linear,
    0.2s color linear;

  /* Styles */
  &.--primary {
    background-color: rgb(var(--primary-color-500));

    &:focus {
      background-color: rgb(var(--primary-color-500));
      box-shadow: inset 0 0 0 3px rgb(var(--primary-color-700));
    }

    &:active:not(:hover) {
      background-color: rgb(var(--primary-color-700));
    }

    &:hover {
      background-color: rgb(var(--primary-color-300));
    }

    &:disabled {
      background-color: rgb(var(--disabled-color));
    }
  }

  &.--secondary {
    background-color: transparent;
    box-shadow: inset 0 0 0 3px rgb(var(--primary-color-500));
    color: rgb(var(--primary-color-500));

    &:focus {
      background-color: rgba(var(--primary-color-500), 0.15);
      box-shadow: inset 0 0 0 3px rgb(var(--primary-color-700));
      color: rgb(var(--primary-color-700));
    }

    &:active {
      background-color: transparent;
      box-shadow: inset 0 0 0 3px rgb(var(--primary-color-700));
      color: rgb(var(--primary-color-700));
    }

    &:hover {
      background-color: rgba(var(--primary-color-500), 0.5);
      box-shadow: inset 0 0 0 3px rgb(var(--primary-color-500));
      color: rgb(var(--primary-color-500));
    }

    &:disabled {
      background-color: transparent;
      box-shadow: inset 0 0 0 3px rgb(var(--disabled-color));
      color: rgb(var(--disabled-color));
    }
  }

  &.--tertiary {
    background-color: transparent;
    box-shadow: inset 0 0 0 3px rgb(var(--tertiary-color-500));
    color: rgb(var(--tertiary-color-500));

    &:focus {
      background-color: rgba(var(--tertiary-color-500), 0.15);
      box-shadow: inset 0 0 0 3px rgb(var(--tertiary-color-700));
      color: rgb(var(--tertiary-color-700));
    }

    &:active {
      background-color: transparent;
      box-shadow: inset 0 0 0 3px rgb(var(--tertiary-color-700));
      color: rgb(var(--tertiary-color-700));
    }

    &:hover {
      box-shadow: inset 0 0 0 3px rgb(var(--tertiary-color-300));
      color: rgb(var(--tertiary-color-300));
    }

    &:disabled {
      background-color: transparent;
      box-shadow: inset 0 0 0 3px rgb(var(--disabled-color));
      color: rgb(var(--disabled-color));
    }
  }

  /* Adds a margin between text and icon */
  > .text:not(:empty) ~ .icon {
    margin-left: 8px;
  }

  /* States */
  &:disabled {
    cursor: not-allowed;
  }

  /* Sizes */
  &.--big {
    height: 48px;
    padding: 0 16px;
  }

  &.--normal {
    height: 40px;
    padding: 0 12px;
  }

  &.--small {
    height: 32px;
    padding: 0 8px;
  }

  /* Text transformations */
  &.--uppercase {
    text-transform: uppercase;
  }
`;

export const Icon = css`
  height: 16px;
  width: 16px;
`;
