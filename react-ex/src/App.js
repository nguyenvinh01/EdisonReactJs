import logo from './logo.svg';
import './App.css';
import HelloWorld from './Bai9/TH1/HelloWorld';
import TH3 from './Bai9/TH3/TH3';
import TH4 from './Bai9/TH4/TH4';
import TH2 from './Bai9/TH2/TH2';
import BT2 from './Bai9/BT2/BT2';
import AppButton from './Bai10/component/button';

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
      <BT2 />
      {/* <HelloWorld /> */}
    </div>
  );
}

export default App;
