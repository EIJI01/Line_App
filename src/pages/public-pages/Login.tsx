import { LineLogin, LoginContainer, LoginForm, LoginImage } from './login.style';
import { useAuthContext } from '../../contexts/AuthContext';
import LineLogo from "../../assets/images/line_btn_base.png";
import { Typography } from '@mui/material';

const Login = () => {
   const { login } = useAuthContext();
   return (
      <LoginContainer>
         <LoginImage>Test</LoginImage>
         <LoginForm>
            <Typography 
               sx={{fontWeight: "bold", fontSize: "3em", color: "white"}}
            >
               LINE LOGIN
            </Typography>
            <LineLogin 
               fullWidth 
               startIcon={<img src={LineLogo} width={"50px"} height={"50px"}/>} 
               onClick={login}>
               Log in
            </LineLogin>
         </LoginForm>
      </LoginContainer>
   );
};

export default Login;
