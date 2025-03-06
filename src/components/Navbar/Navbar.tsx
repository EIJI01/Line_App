import { LogoNavbar, MainNavbar, Menu, MenuNavber, NarbarContainer } from './Navbar.style';
import Logo from '../../assets/images/logo.png';
import { navbarMenu } from '../../constants/navbar.constant';
import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
   const { liffInfo, userInfo } = useAuthContext();
   const [active, setActive] = React.useState<number>(0);
   const handleClickMenu = React.useCallback((index: number) => {
      setActive(index);
   }, []);

   const memoNavbar = React.useMemo(() => {
      return navbarMenu.map((item, index) => {
         const isLoggedIn = liffInfo.isLoggedIn;
         const loggedInAndIsAccountPath = isLoggedIn && item.name === 'Account';
         return (
            <Menu
               to={isLoggedIn ? item.link : '/login'}
               keyProp={index}
               active={active}
               onClick={() => handleClickMenu(index)}>
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
            </Menu>
         );
      });
   }, [liffInfo.isLoggedIn, userInfo.picture, active]);

   return (
      <NarbarContainer>
         <MainNavbar>
            <LogoNavbar url={Logo} width='100px' height='50px' />
            <MenuNavber len={navbarMenu.length}>{memoNavbar}</MenuNavber>
         </MainNavbar>
      </NarbarContainer>
   );
};

export default Navbar;
