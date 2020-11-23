import { html } from 'lit-html';
import markdown from './readme.md';

const args = {
  slot: 'Content',
};

const argTypes = {
  slot: {
    description: 'Main slot',
  },
};

export default {
  title: 'Components/Wrapper',
  component: 'nvtui-wrapper',
  parameters: {
    notes: { markdown },
  },
};

const Template = ({ slot }) => html`
  <nvtui-wrapper>${slot}</nvtui-wrapper>
`;

export const Default = Template.bind({});
Default.args = {...args};
Default.argTypes = {...argTypes};
