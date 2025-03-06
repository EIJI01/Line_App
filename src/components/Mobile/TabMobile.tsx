import React from 'react';
import { navbarMenu } from '../../constants/navbar.constant';
import { Container, Main, Tab } from './mobile.style';
import { useAuthContext } from '../../contexts/AuthContext';

const TabMobile = () => {
   const { liffInfo, userInfo } = useAuthContext();
   const [active, setActive] = React.useState<number>(0);
   const handleChangeTab = React.useCallback((index: number) => {
      setActive(index);
   }, []);

   const memoNavbar = React.useMemo(() => {
      return navbarMenu.map((item, index) => {
         const isLoggedIn = liffInfo.isLoggedIn;
         const loggedInAndIsAccountPath = isLoggedIn && item.name === 'Account';
         return (
            <Tab
               to={isLoggedIn ? item.link : '/login'}
               keyProp={index}
               active={active}
               onClick={() => handleChangeTab(index)}>
               {loggedInAndIsAccountPath ? (
                  <img
                     src={userInfo.picture}
                     alt='profile'
                     width='22px'
                     height='22px'
                     style={{ borderRadius: '50%' }}
                  />
               ) : (
                  React.createElement(item.icon)
               )}
            </Tab>
         );
      });
   }, [liffInfo.isLoggedIn, userInfo.picture, active]);

   return (
      <Container>
         <Main>{memoNavbar}</Main>
      </Container>
   );
};

export default TabMobile;
