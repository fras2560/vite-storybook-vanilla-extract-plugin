/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from 'storybook/internal/preview-api';
import { expect, fireEvent, waitFor, within } from 'storybook/test';

import { RadioButton } from './radioButton';
import * as styles from './radioButton.stories.css';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  args: {
    checked: true,
    children: 'This is a radio button',
    value: 'Some-Value',
    onChange: () => {},
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'The checked status of the component',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Content',
        type: { summary: 'boolean' },
      },
    },
    children: {
      control: 'text',
      description:
        'The text to associate with the given checkbox. If no text/label is provided then should provide aria-label or aria-labelled by',
      table: {
        category: 'Content',
        type: { summary: 'React.ReactNode' },
      },
    },
    value: {
      control: 'text',
      description: 'The value of the radio box. Can be a string or a number',
      table: {
        category: 'Content',
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `A radio button component. Useful for:
- when only one option can be selected from a list
- avoid nesting radio buttons or using radio buttons to select multiple options.
- expose all available options 
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const PlayStory: Story = {
  parameters: {
    docs: {
      description: {
        story: "Storybook controls for all radio button component's inputs",
      },
    },
  },
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
      <div className={styles.container}>
        <RadioButton
          value={args.value}
          checked={args.checked}
          onChange={() => {
            updateArgs({ checked: !checked });
          }}>
          {args.children}
        </RadioButton>
        <RadioButton
          value='Another-Value'
          checked={!args.checked}
          onChange={() => {
            updateArgs({ checked: !checked });
          }}>
          Another radio button
        </RadioButton>
      </div>
    );
  },
};

export const Interactivity: Story = {
  argTypes: {
    checked: {
      control: false,
    },
    children: {
      control: false,
    },
    value: {
      control: false,
    },
    onChange: {
      control: false,
    },
  },
  args: {
    checked: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Test Interacting with checkbox',
      },
    },
  },
  render: (args) => {
    const [{ checked }, updateArgs] = useArgs();
    return (
      <div
        className={styles.container}
        role='radiogroup'
        aria-label='radiogroup'>
        <RadioButton
          value={args.value}
          checked={args.checked}
          onChange={() => {
            updateArgs({ checked: !checked });
          }}>
          Option 1
        </RadioButton>
        <RadioButton
          value='Another-Value'
          checked={!args.checked}
          onChange={() => {
            updateArgs({ checked: !checked });
          }}>
          Option 2
        </RadioButton>
      </div>
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Only one radio button can be checked', async () => {
      const firstRadioOption = canvas.getByRole('radio', {
        name: /option 1/i,
      });
      const secondRadioOption = canvas.getByRole('radio', {
        name: /option 2/i,
      });
      await waitFor(async () => {
        console.info(canvasElement.innerHTML);
        console.info(secondRadioOption.innerHTML);
        await fireEvent.click(secondRadioOption);
        await expect(secondRadioOption).toBeChecked();
        await expect(firstRadioOption).not.toBeChecked();
      });
    });
  },
};