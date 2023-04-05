import logo from './logo.svg';
import './App.css';
import HelloWorld from './Bai9/TH1/HelloWorld';
import TH1 from './Bai10/TH1/TH1';
import TH2 from './Bai10/TH2/TH2';
import TH3 from './Bai10/TH3/TH3';
import TH4 from './Bai10/TH4/Th4';
import BT1 from './Bai10/BT1/BT1';
import BT2 from './Bai10/BT2/BT2';
function App() {
  const name = "Cee"
  const User = {
    firstName: 'Vinh',
    lastName: 'Vinh2'
  }
  const formatName = (user) => {
    return user.firstName + user.lastName
  }
  return (
    <div className="App">
      {/* <BT2 /> */}
      <BT2 />
      {/* <HelloWorld /> */}
    </div>
  );
}

export default App;
