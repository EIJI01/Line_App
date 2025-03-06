import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import Aside from '../Aside/Aside';
import TabMobile from '../Mobile/TabMobile';
import Navbar from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { Content, Main, MainContainer } from './main.style';

type Props = {
   children: React.ReactNode;
};

const MainLayout: React.FC<Props> = (props) => {
   const { liffInfo } = useAuthContext();
   const isMobile = React.useMemo(() => {
      return liffInfo.isInClient;
   }, [liffInfo.isInClient]);
   return (
      <MainContainer mobile={isMobile}>
         {!isMobile ? <Navbar /> : <TabMobile />}
         <Main>
            {!isMobile && <Sidebar />}
            <Content mobile={isMobile}>
               {props.children}
               {!isMobile && <Aside />}
            </Content>
         </Main>
      </MainContainer>
   );
};

export default MainLayout;
