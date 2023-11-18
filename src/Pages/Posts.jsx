import React from "react";
import MarketCard from "../Components/MarketCards";
import { Grid, useDisclosure, Button } from "@chakra-ui/react";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { useRef,useState } from "react";
import axios from 'axios';

// import { ethers } from 'ethers';
// import { Web3ReactProvider } from '@web3-react/core';
import { FaWolfPackBattalion } from "react-icons/fa";

// const getEtherData= async ()=>{
//   let signer = null;
//   console.log("getEtherData")
// let provider;
// if (window.ethereum == null) {

//     // If MetaMask is not installed, we use the default provider,
//     // which is backed by a variety of third-party services (such
//     // as INFURA). They do not have private keys installed so are
//     // only have read-only access
//     console.log("MetaMask not installed; using read-only defaults")
//     provider = ethers.getDefaultProvider()

// } else {

//     // Connect to the MetaMask EIP-1193 object. This is a standard
//     // protocol that allows Ethers access to make all read-only
//     // requests through MetaMask.
//     provider = new ethers.BrowserProvider(window.ethereum)

    
//     // It also provides an opportunity to request access to write
//     // operations, which will be performed by the private key
//     // that MetaMask manages for the user.
//     signer = await provider.getSigner();
//     console.log(signer.address)
// }
// }
function DrawerExample(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const {address, isConnected, connect} = props;


  /* ATTENTION 

  if you wann understand how the not showing logic work then check Navabar.jsx 66-76 lines
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⢀⣴⣷⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢴⣿⣿⣿⣿⣿⣏⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠿⣿⣿⣿⣿⣷⣄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀
⠀⢀⣴⣧⣄⠀⠀⠀⠀⠙⢻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠉⠿⣿⣿⣿⣿⣷⣄⠀
⢴⣿⣿⣿⣿⣶⣀⠀⠀⠀⠀⢘⣿⣿⣿⣿⣿⣿⣏⠀⠀⠀⠀⠉⠿⣿⣿⣿⣿⡷
⠀⠙⠿⣿⣿⣿⣿⣶⣄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠉⠻⡿⠋⠀
⠀⠀⠀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠘⢻⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⢉⣿⣿⣿⣿⣿⡷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⢿⡿⠋⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

*/

  return (
    // <Web3ReactProvider getLibrary={getLibrary}>
    <div style={{ width: "100%", margin: "auto", textAlign: "end", padding: "2%" }}>
      <Button ref={btnRef} colorScheme='teal' onClick={connect}>
      {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"}
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"gray.500"}>Connect your wallet</DrawerHeader>

          <DrawerBody>
            <Button width={"auto"}>
              <FaWolfPackBattalion size={30} />
              <p style={{ margin: "0 5%" }}>Metamask</p>
            </Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    // </Web3ReactProvider>
  );
}


const MarketPlace = (props) => {
  const [postData, setPostData] = useState([]);
  const [callonce, setCall] = useState(1);

  const DisplayPostData = () => {
    axios.get('https://nftbackend-2p4r.onrender.com/displayPostData')
      .then(response => {
        setPostData(prevData => [...prevData, ...response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  }

  if (callonce === 1) {
    DisplayPostData();
    setCall(2);
  }

  console.log(postData);

  return (
    <>
      <Grid p={6} gap={5} templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}>
        {postData.map((nft) => (
          <MarketCard
            // key={nft._id}  {/* Add a unique key for each element in the array */}
            title={"This NFT/collection is available to cop! 👀"}
            des={"Anyone interested in these NFTs?"}
            imgs={[nft.imageUrl1]}
            ExpiryDate={nft.expiryDate}
            author={nft.SenderNft}
            value={"$ 1,000"}
            status={false}
            acceptTance={{ name: nft.ReceiverNft, img: nft.imageUrl2 }}
          />
        ))}
      </Grid>
    </>
  );
};

export default MarketPlace;
