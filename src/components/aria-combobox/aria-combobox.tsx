import {useButton, useComboBox, useFilter} from 'react-aria';
import {Item, useComboBoxState} from 'react-stately';
import {useRef} from "react";
import {Button} from "./button";
import {Popover} from "./popover";
import {ListBox} from "./listbox";
export const AriaCombobox = (props:any) => {
  // Setup filter function and state.
  let { contains } = useFilter({ sensitivity: 'base' });
  let state = useComboBoxState({ ...props, defaultFilter: contains });

  // Setup refs and get props for child elements.
  let buttonRef = useRef(null);
  let inputRef = useRef(null);
  let listBoxRef = useRef(null);
  let popoverRef = useRef(null);

  let { buttonProps, inputProps, listBoxProps, labelProps } = useComboBox(
      {
        ...props,
        inputRef,
        buttonRef,
        listBoxRef,
        popoverRef
      },
      state
  );

  return (
      <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
          <label {...labelProps}>{props.label}</label>
          <div>
              <input
                  {...inputProps}
                  ref={inputRef}
                  style={{
                      height: 24,
                      boxSizing: 'border-box',
                      marginRight: 0,
                      fontSize: 16
                  }}
              />
              <Button
                  {...buttonProps}
                  buttonRef={buttonRef}
                  style={{
                      height: 24,
                      marginLeft: 0
                  }}
              >
          <span
              aria-hidden="true"
              style={{ padding: '0 2px' }}
          >
            ▼
          </span>
              </Button>
              {state.isOpen &&
                  (
                      <Popover
                          state={state}
                          triggerRef={inputRef}
                          popoverRef={popoverRef}
                          isNonModal
                          placement="bottom start"
                      >
                          <ListBox
                              {...listBoxProps}
                              listBoxRef={listBoxRef}
                              state={state}
                          />
                      </Popover>
                  )}
          </div>
      </div>
  );
}

