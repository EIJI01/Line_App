import liff from '@line/liff';
import React from 'react';

const ScanQRCode = () => {
   const [valueScan, setValueScan] = React.useState<string>('');

   liff
      .scanCodeV2()
      .then((data) => setValueScan(data.value || ''))
      .catch((error) => alert(error));

   return <div>{valueScan}</div>;
};

export default ScanQRCode;
