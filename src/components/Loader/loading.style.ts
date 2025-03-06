import { keyframes, styled } from '@mui/material';

export const rotate = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

export const scale = keyframes`
  0%, 100% {transform: scale(1); opacity: 0.5;}
  50% {transform: scale(1.5); opacity: 1;}
`;

export const LoaderWrapper = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100%',
   position: 'fixed',
   width: '100%',
}));

export const LoaderInsideMain = styled('div')({
   width: '50px',
   height: '50px',
   position: 'relative',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   animation: `${rotate} 1.5s linear infinite`,
});

export const Dot = styled('div')<{ position: any }>(({ position, theme }) => ({
   position: 'absolute',
   width: '10px',
   height: '10px',
   backgroundColor: theme.palette.primary.main,
   borderRadius: '50%',
   animation: `${scale} 2s linear infinite`,
   ...position,
}));
