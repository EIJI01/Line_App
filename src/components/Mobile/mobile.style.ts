import { styled } from '@mui/material';
import { navbarMenu } from '../../constants/navbar.constant';
import { NavLink } from 'react-router-dom';

export const Container = styled('div')((props) => {
   return {
      position: 'fixed',
      bottom: 0,
      left: 0,
      height: '60px',
      borderTop: `2px solid ${props.theme.palette.secondary.main}`,
      width: '100%',
      zIndex: 999,
   };
});

export const Main = styled('main')(() => {
   return {
      display: 'grid',
      gridTemplateColumns: `repeat(${navbarMenu.length}, 1fr)`,
      backgroundColor: 'white',
      height: '100%',
   };
});

export const Tab = styled(NavLink)<{ keyProp: number; active: number }>((props) => {
   const isActive = props.keyProp === props.active;
   return {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: isActive ? props.theme.palette.quaternary.main : props.theme.palette.secondary.main,
      transition: 'all .1s linear',
      '-webkit-tap-highlight-color': 'transparent',
   };
});
