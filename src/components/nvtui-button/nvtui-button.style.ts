import { css } from '@emotion/css';

export const Button = css`
  border: 0;
  border-radius: 10px;
  color: rgb(var(--button-color));
  font-family: var(--font-family-roboto);
  font-size: var(--button-font-size);
  font-weight: 300;
  outline: 0;
  padding: 0 42px;
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

  /* States */
  &:disabled {
    cursor: not-allowed;
  }

  /* Sizes */
  &.--big {
    height: 48px;
  }

  &.--normal {
    height: 40px;
  }

  &.--small {
    height: 32px;
  }

  /* Text transformations */
  &.--uppercase {
    text-transform: uppercase;
  }
`;
