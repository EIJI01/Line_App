import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
   return (
      <div>
         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <div>
               <div>
                  <a href='https://vite.dev' target='_blank'>
                     <img src={viteLogo} className='logo' alt='Vite logo' />
                  </a>
                  <a href='https://react.dev' target='_blank'>
                     <img src={reactLogo} className='logo react' alt='React logo' />
                  </a>
               </div>
               <h1>Vite + React</h1>
               <div className='card'>
                  {/* <button
               onClick={() => setUserInfo((prev: UserInfoType) => ({ ...prev, name: 'chanyut' }))}
            >
               Set Chanyut
            </button> */}
                  {/* <button onClick={() => setCount((prev) => prev + 1)}>Click Count</button> */}
                  <p>
                     Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
               </div>
               <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
            </div>
         ))}
      </div>
   );
}

export default App;
