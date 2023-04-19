import logo from './logo.svg';
import './App.css';
import HelloWorld from './Bai9/TH1/HelloWorld';
import TH1 from './Bai12/TH1/TH1';
import TH2 from './Bai12/TH2/TH2';
import TH3 from './Bai12/TH3/TH3';
import TH4 from './Bai10/TH4/Th4';
import BT1 from './Bai12/BT1/BT1';
import BT2 from './Bai12/BT2/BT2';
import B12Test from './Bai12/Testuse/test';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
function App() {
  return (
    <RouterProvider
      router={router}
    >
      <cHook />
    </RouterProvider>
  );
}

export default App;
