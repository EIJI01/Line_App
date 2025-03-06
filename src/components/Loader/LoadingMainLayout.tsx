import { Dot, LoaderInsideMain, LoaderWrapper } from './loading.style';

export const LoadingMainLayout = () => {
   const dots = [
      { position: { top: 0 } },
      { position: { right: 0 } },
      { position: { bottom: 0 } },
      { position: { left: 0 } },
   ];

   return (
      <LoaderWrapper>
         <LoaderInsideMain>
            {dots.map((dot, index) => (
               <Dot key={index} position={dot.position} />
            ))}
         </LoaderInsideMain>
      </LoaderWrapper>
   );
};
