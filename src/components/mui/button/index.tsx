import * as React from 'react';
import Button from '@mui/base/Button';
import useButton from '@mui/base/useButton';
import './index.css';

export const BaseButton = (props: any) => {
  const { getRootProps } = useButton({});
  
  console.log("getRootProps", getRootProps());


  if(props.icon) return <Button {...props}>{props.children}</Button>
  if(props.icon2) return <button type="button" {...props} {...getRootProps()}> {props.children} </button>
 
  return (
   <div className='button-div'>
      {!props.icon && <>
        <Button>Button</Button>
        <button type="button" {...getRootProps()}>
          useButton
        </button>
      </>}
   </div>
  );
}