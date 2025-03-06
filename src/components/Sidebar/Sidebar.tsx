import liff from '@line/liff';
import { Container } from './sidebar.style';

const Sidebar = () => {
   const onClickScan = async () => {
      try {
         const result = await liff.scanCodeV2();
         console.log(result.value);
      } catch (error) {
         console.error('Error : ', error);
      }
   };
   return (
      <Container>
         <div
            style={{
               height: '100%',
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}>
            <button type='button' onClick={onClickScan}>
               Scan
            </button>
         </div>
      </Container>
   );
};

export { Sidebar };
