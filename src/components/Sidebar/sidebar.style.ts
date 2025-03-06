import { styled } from '@mui/material/styles';

export const Container = styled('main')(() => {
   return {
      bottom: 0,
      left: 0,
      top: '60px',
      position: 'fixed',
      width: '250px',
      height: '100%',
      backgroundColor: '#f5f5f5',
      overflow: 'auto',
      borderRight: '1px solid #ddd',
   };
});
