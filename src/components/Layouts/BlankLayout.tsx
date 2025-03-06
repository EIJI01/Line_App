import React from 'react';
import { MainBlank } from './blank.style';

type Props = {
   children: React.ReactNode;
};

const BlankLayout = (props: Props) => {
   return <MainBlank>{props.children}</MainBlank>;
};

export default BlankLayout;
