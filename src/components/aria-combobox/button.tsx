import {useButton} from 'react-aria';

export const Button = (props:any ) => {
    let ref = props.buttonRef;
    let { buttonProps } = useButton(props, ref);
    return (
        <button {...buttonProps} ref={ref} style={props.style}>
            {props.children}
        </button>
    );
}