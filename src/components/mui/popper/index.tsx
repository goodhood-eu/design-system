import Popper from '@mui/base/Popper';
import './index.css';

interface IProps {
  open: boolean;
  anchorEl: HTMLElement;
  children: any;
}

export const PopperBase = (props: IProps) => {
  return (
  <Popper className='popper' open={props.open} anchorEl={props.anchorEl}>
      { props.children }
  </Popper>);
}