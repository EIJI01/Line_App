import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NarbarContainer = styled('main')(({ theme }) => {
   return {
      top: 0,
      left: 0,
      height: '60px',
      background: theme.palette.primary.main,
      position: 'fixed',
      width: '100%',
   };
});

export const MainNavbar = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingLeft: '20px',
   paddingRight: '20px',
   height: '100%',
});

export const LogoNavbar = styled('a')<{ url: string; width?: string; height?: string }>(
   (props) => ({
      color: props.theme.palette.primary.main,
      backgroundImage: `url(${props.url})`,
      width: props.width,
      height: props.height,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: '8px',
   }),
);

export const MenuNavber = styled('div')<{ len: number }>((props) => ({
   display: 'grid',
   gridTemplateColumns: `repeat(${props.len}, 50px)`,
   height: '100%',
}));

export const Menu = styled(NavLink)<{ active?: number; keyProp: number }>((props) => {
   const isActive = props.active === props.keyProp;
   return {
      backgroundColor: 'inherit',
      fontWeight: 'bold',
      color: isActive ? props.theme.palette.quaternary.main : 'white',
      listStyle: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .3s linear',
   };
});
