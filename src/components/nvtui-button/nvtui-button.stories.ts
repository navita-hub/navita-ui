import { html } from 'lit-html';
import markdown from './readme.md';
import { eventHandles, action } from '../../../.storybook/helpers/custom-action';

const args = {
  slot: 'Content',
  size: 'default',
  uppercase: false,
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
  size: {
    description: 'Button\'s size',
    control: {
      type: 'inline-radio',
      options: ['small', 'default', 'big'],
    },
    table: {
      defaultValue: { summary: 'default' },
    },
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

const Template = ({ slot, size, uppercase }) => html`
  <nvtui-button
    size="${size}"
    uppercase="${uppercase}"
  >${slot}</nvtui-button>
  ${action('nvtui-button', customEvents)}
`;

export const Default = Template.bind({});
Default.args = {...args};
Default.argTypes = {...argTypes};
