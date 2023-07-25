import { useMachine, normalizeProps } from '@zag-js/react';
import * as combobox from '@zag-js/combobox';
import { useId, useState } from 'react';

const OPTIONS_LIMIT = 10;

export type Option = string;

type AutoComponentProps = {
  getOptions: (value: string) => Promise<Awaited<Option[]>>;
}

const AutoComplete: React.FC<AutoComponentProps> = ({ getOptions }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [state, send] = useMachine(
    combobox.machine({
      id: useId(),
      async onInputChange({ value }) {
        if (!value.length) return setOptions([]);

        const options = await getOptions(value);
        setOptions(options.splice(0, OPTIONS_LIMIT));
      },
    })
  );
  
  const api = combobox.connect(state, send, normalizeProps);

  return (
    <div>
      <form {...api.rootProps}>
        <input {...api.inputProps} />
        <button type="submit">Send</button>
      </form>
      <div {...api.positionerProps} style={{ border: '1px solid blue'}}>
        {Boolean(options.length) && (
          <ul {...api.contentProps}>
            {options.map((option, index,) => (
              <li
                {...api.getOptionProps({
                  label: option,
                  value: option,
                  index,
                })}
                key={option}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
};

export default AutoComplete;
