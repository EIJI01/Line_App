import React from 'react';
import { AsideCustom } from './aside.style';
// import { css, Global } from '@emotion/react';

type ConsentType = {
   consent1: boolean;
   consent2: boolean;
   consent3: boolean;
};

const Aside = () => {
   const [consent, setConsent] = React.useState<ConsentType>({
      consent1: false,
      consent2: false,
      consent3: false,
   });

   const [checkClickConsentRequired, setCheckClickConsentRequired] = React.useState(0);

   const handlePressCheckbox = (event: React.PointerEvent<HTMLInputElement>) => {
      const name = event.currentTarget.name as keyof ConsentType;
      const isChecked = !consent[name];
      setConsent((prev) => ({ ...prev, [name]: isChecked }));
      setCheckClickConsentRequired((prev) => (isChecked ? prev + 1 : prev - 1));
   };

   console.log(checkClickConsentRequired);
   console.log(consent);

   return (
      <AsideCustom>
         <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
            {/* <Global
               styles={css`
                  body {
                     background: ${bodyFillColor};
                     margin: 0;
                     padding: 0;
                     min-height: '100vh';
                     max-width: '100vw';
                  }
               `}
            /> */}
            <input
               name='consent1'
               type='checkbox'
               checked={consent.consent1}
               onPointerDown={handlePressCheckbox}
               onChange={() => {}}
            />
            <input
               name='consent2'
               type='checkbox'
               checked={consent.consent2}
               onPointerDown={handlePressCheckbox}
               onChange={() => {}}
            />
            <input
               name='consent3'
               type='checkbox'
               checked={consent.consent3}
               onPointerDown={handlePressCheckbox}
               onChange={() => {}}
            />
         </div>
      </AsideCustom>
   );
};

export default Aside;
