import { styled } from '@mui/material';

export const MainContainer = styled('div')<{ mobile: boolean }>((props) => {
   const isMobile = props.mobile;
   return {
      bottom: !isMobile ? 0 : undefined,
      overflowY: 'scroll',
      overscrollBehavior: 'none',
      backgroundColor: 'white',
      height: 'calc(100% - 60px)',
      width: '100%',
      position: 'absolute',
   };
});

export const Main = styled('div')(() => ({
   minWidth: '320px',
}));

export const Content = styled('main')<{ mobile: boolean }>((props) => {
   const isMobile = props.mobile;
   return {
      height: '100%',
      flex: 1,
      overflowY: 'auto',
      marginLeft: !isMobile ? '250px' : '',
      padding: 10,
   };
});
