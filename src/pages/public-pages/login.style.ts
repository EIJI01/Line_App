import { Button, styled } from '@mui/material';

export const LoginContainer = styled('div')(() => ({
   height: '100dvh',
   width: '100%',
   justifyContent: 'space-between',
   alignItems: 'center',
   display: 'flex',
}));

export const LoginForm = styled('div')(({ theme }) => ({
   height: '100%',
   width: '35%',
   display: 'flex',
   justifyContent: "center",
   alignItems: "center",
   flexDirection: "column",
   backgroundColor: theme.palette.primary.main,
   boxShadow: `1px 1px 1px ${theme.palette.primary.main}`,
   paddingLeft: "20px",
   paddingRight: "20px",
   boxSizing: "border-box"
}));

export const LoginImage = styled('div')(() => ({
   height: '100%',
   flex: 1,
}));


export const LineLogin = styled(Button)(() => ({
   backgroundColor: "#06C755",
   transition: "all .3s linear",
   ":hover": {
      backgroundColor: "#000000",
   },
   color: "white",
   border: "3px solid white"
}))