import * as React from 'react';
import useInput from '@mui/base/useInput';
import { unstable_useForkRef as useForkRef } from '@mui/utils';
import { BaseButton } from '../button'

import './index.css'

export const InputBase = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
    const { getRootProps, getInputProps } = useInput(props);
    const inputProps = getInputProps();
    inputProps.ref = useForkRef(inputProps.ref, ref);

    return (
        <div className='input-div' {...getRootProps()}>
            <input className='input' {...props} {...inputProps} />
            <BaseButton icon className='input-button' type="submit" aria-label="Suchen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
                    <path stroke="#201649" strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M2 16h28M19.11 6l10.888 10L19.11 26">
                    </path>
                </svg>
            </BaseButton>
        </div>
    );
});