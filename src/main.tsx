import { createRoot } from 'react-dom/client';
import './index.css';
import AuthContext from './contexts/AuthContext.tsx';
import { theme } from './configs/theme.ts';
import { ThemeProvider } from '@mui/material/styles';
import RoutesConfig from './routers/Routes.tsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={theme}>
      <AuthContext>
         <RoutesConfig />
      </AuthContext>
   </ThemeProvider>,
);
