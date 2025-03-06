import { AccountCircle, Home, Notifications, QrCode } from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export const navbarMenu: {
   name: string;
   link: string;
   icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
      muiName: string;
   };
}[] = [
   { name: 'Home', link: '/', icon: Home },
   { name: 'Scan', link: '/scan', icon: QrCode },
   { name: 'Noti', link: '/notification', icon: Notifications },
   { name: 'Account', link: '/profile', icon: AccountCircle },
];
