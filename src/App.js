import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { MNain } from './Pages/Main';
import Multistep from './Pages/MultiStepForm';
import Posts from './Pages/Posts';
import DirectTrade from './Pages/DirectTrade';
// import RoadMap from './Pages/RoadMap';
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";


function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });


  return (
    <Router>
      <Navbar connect={connect} isConnected={isConnected} address={address}  />
      <Routes>
        <Route exact path="/" element={<MNain/>} />
        <Route exact path="/DirectTrade" element={<DirectTrade/>}/>
        <Route exact path="/create-post" element={<Multistep/>}/>
        <Route exact path="/Posts" element={<Posts />}/>
      </Routes>
    </Router>
  );
}

export default App;
