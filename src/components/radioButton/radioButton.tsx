import clsx from 'clsx';
import React, { InputHTMLAttributes, isValidElement, useId } from 'react';

import { labelRecipe } from '../../styles/typography/typography.css';

import { holder, radioButton, radioButtonBox } from './radioButton.css';

interface BaseRadioButtonProps<T extends string | number>
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'checked' | 'type'
  > {
  value: T;
  checked: boolean;
  focusVisible?: boolean;
}

type RadioButtonProps<T extends string | number = string> =
  BaseRadioButtonProps<T>;

const RadioButton: React.FC<RadioButtonProps> = <
  T extends string | number = string,
>({
  value,
  onChange,
  children,
  checked = false,
  focusVisible = false,
  ...props
}: RadioButtonProps<T>) => {
  const radioButtonId = useId();

  const renderLabel = () => {
    if (!children) return null;

    if (isValidElement(children)) {
      return children;
    }
    return (
      <label
        htmlFor={radioButtonId}
        className={clsx(labelRecipe({ disabled: props.disabled }))}>
        {children}
      </label>
    );
  };
  return (
    <div className={clsx(holder())}>
      <div className={clsx(radioButtonBox({ focusVisible }))} id={props.id}>
        <input
          id={radioButtonId}
          type='radio'
          name={props.name}
          value={value}
          disabled={props.disabled}
          className={clsx(radioButton())}
          checked={checked}
          onChange={!props.disabled ? onChange : undefined}></input>
      </div>
      {renderLabel()}
    </div>
  );
};

export type { RadioButtonProps };
export { RadioButton };
