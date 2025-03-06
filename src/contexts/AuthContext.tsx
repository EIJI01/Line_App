import React, { createContext, useContext } from 'react';
import { LiffDataType } from '../types/liff.type';
import liff from '@line/liff';
import { initialLiffInfo } from '../constants/liff.constant';
import { UserInfoType } from '../types/user.type';
import { initialUserInfo } from '../constants/user.constant';
import { configs } from '../configs/env.config';
import Loading from '../components/Loader/Loading';

type ContextProps = {
   liffInfo: LiffDataType;
   login: () => void;
   logout: () => void;
   userInfo: UserInfoType;
   setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
};

const initialContext: ContextProps = {
   liffInfo: initialLiffInfo,
   login: () => null,
   logout: () => null,
   userInfo: initialUserInfo,
   setUserInfo: () => null,
};

const AuthProvider = createContext<ContextProps>(initialContext);

type Props = {
   children: React.ReactNode;
};

export const useAuthContext = (): ContextProps => useContext(AuthProvider);

const AuthContext: React.FC<Props> = (props) => {
   const [isLoading, setIsLoading] = React.useState<boolean>(true);
   const [liffInfo, setLiffInfo] = React.useState<LiffDataType>(initialLiffInfo);
   const [userInfo, setUserInfo] = React.useState<UserInfoType>(initialUserInfo);

   const liffInit = async () => {
      try {
         await liff.init({ liffId: configs.LIFF_ID });
         const { userAgent } = navigator;
         setLiffInfo({
            isInClient: liff.isInClient(),
            isLoggedIn: liff.isLoggedIn(),
            os: liff.getOS() as string,
            isInAppBrowser: !liff.isInClient() && userAgent.includes('Line'),
         });

         if (liff.isLoggedIn()) {
            const profile = await liff.getProfile();
            setUserInfo({
               picture: profile.pictureUrl,
               message: profile.statusMessage,
               name: profile.displayName,
               userId: profile.userId,
            });
         }
         setIsLoading(false);
      } catch (error) {
         console.error('Error liff: ', error);
         setIsLoading(false);
      }
   };

   console.log('AuthContext Render.');

   const login = React.useCallback(() => {
      if (!liffInfo.isLoggedIn) {
         liff.login();
      }
   }, [liffInfo.isLoggedIn]);

   const logout = React.useCallback(() => {
      if (liffInfo.isLoggedIn) {
         liff.logout();
      }
   }, [liffInfo.isLoggedIn]);

   React.useEffect(() => {
      liffInit();
   }, []);

   const contextValue: ContextProps = React.useMemo(
      () => ({ liffInfo, login, logout, userInfo, setUserInfo }),
      [liffInfo, login, logout, userInfo, setUserInfo],
   );

   if (isLoading)
      return (
         <Loading
            style={{
               boxSx: {
                  position: 'fixed',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
               },
            }}
         />
      );

   return <AuthProvider.Provider value={contextValue}>{props.children}</AuthProvider.Provider>;
};

export default AuthContext;
