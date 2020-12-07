import { html } from 'lit-html';
import markdown from './readme.md';
import { eventHandles, action } from '../../../.storybook/helpers/custom-action';

const args = {
  slot: 'Click here',
  big: false,
  normal: true,
  small: false,
  primary: false,
  secondary: false,
  tertiary: false,
  uppercase: false,
  disabled: false,
  icon: 'plus',
};

const argTypes = {
  slot: {
    description: 'Main slot',
  },
  uppercase: {
    description: 'Makes text uppercased',
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
  primary: {
    description: 'Sets button\'s color as primary',
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
  secondary: {
    description: 'Sets button\'s color as secondary',
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
  tertiary: {
    description: 'Sets button\'s color as tertiary',
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
  big: {
    description: 'Sets button\'s size as big',
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
  normal: {
    description: 'Sets button\'s size as normal',
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
  small: {
    description: 'Sets button\'s size as small',
    control: {
      type: 'boolean',
    },
    table: {
      defaultValue: { summary: false },
    },
  },
  icon: {
    control: {
      type: 'select',
      options: ['', 'plus', 'trash'],
    },
    description: 'Icon name',
  },
};

const customEvents = ['clicked'];
const events = [...eventHandles(customEvents)];

export default {
  title: 'Components/Button',
  component: 'nvtui-button',
  parameters: {
    actions: {
      handles: events,
    },
    notes: { markdown },
  },
};

const Template = ({
  disabled,
  big,
  normal,
  slot,
  small,
  uppercase,
  primary,
  secondary,
  tertiary,
  icon,
}) => html`
  <nvtui-button
    disabled="${disabled}"
    primary="${primary}"
    secondary="${secondary}"
    tertiary="${tertiary}"
    big="${big}"
    normal="${normal}"
    small="${small}"
    uppercase="${uppercase}"
    icon="${icon}"
  >${slot}</nvtui-button>
  ${action('nvtui-button', customEvents)}
`;

export const Primary = Template.bind({});
Primary.args = { ...args, primary: true };
Primary.argTypes = { ...argTypes };

export const Secondary = Template.bind({});
Secondary.args = { ...args, secondary: true };
Secondary.argTypes = { ...argTypes };

export const Tertiary = Template.bind({});
Tertiary.args = { ...args, tertiary: true };
Tertiary.argTypes = { ...argTypes };
