import { html } from 'lit-html';
import markdown from './readme.md';

const args = {
  icon: 'plus',
};

const argTypes = {
  icon: {
    control: {
      type: 'select',
      options: ['plus', 'trash'],
    },
    description: 'Icon name',
  },
};

export default {
  title: 'Components/Icon',
  component: 'nvtui-icon',
  parameters: {
    notes: { markdown },
  },
};

const Template = ({ icon }) => html`
  <div style="display: grid; grid-template-columns: repeat(auto-fit, 60px); grid-gap: 24px; text-align: center;">
    <div>
      <nvtui-icon icon="${icon}" style="height: 24px;width: 24px;"></nvtui-icon>
      <br>
      ${icon}
    </div>

    <div style="grid-column-start: 1;">
      <nvtui-icon icon="plus" style="height: 24px;width: 24px;"></nvtui-icon>
      <br>
      plus
    </div>
    <div>
      <nvtui-icon icon="trash" style="height: 24px;width: 24px;"></nvtui-icon>
      <br>
      trash
    </div>
  </div>
`;

export const Default = Template.bind({});
Default.args = {...args};
Default.argTypes = {...argTypes};
