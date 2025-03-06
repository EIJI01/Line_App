export type UserInfoType = {
   picture?: string;
   name?: string;
   message?: string;
   userId?: string;
};

export type UserContextProps = {
   userInfo: UserInfoType | null;
   setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
};
