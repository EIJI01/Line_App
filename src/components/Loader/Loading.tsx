import { Box, CircularProgress, SxProps, Theme } from '@mui/material';

type Props = {
   style?: {
      boxSx?: SxProps<Theme> | undefined;
      childStyle?: {
         color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
         size?: string | number;
      };
   };
};
const Loading = (props: Props) => {
   return (
      <Box sx={{ ...props.style?.boxSx }}>
         <CircularProgress
            color={props.style?.childStyle?.color}
            size={props.style?.childStyle?.size}
         />
      </Box>
   );
};

export default Loading;
