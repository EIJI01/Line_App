import { styled } from '@mui/material';

export const AsideCustom = styled('aside')(() => {
   return {
      position: 'fixed',
      bottom: 0,
      right: 20,
      top: '60px',
      borderLeft: '1px solid #ddd',
      width: '200px',
      height: '100%',
      backgroundColor: 'gray',
   };
});
