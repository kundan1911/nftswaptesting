import React, { useState, useRef } from 'react';
// import Moralis from 'moralis';
import { Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import Dialog from 'rc-dialog';
import { Jazzicon } from '@ukstv/jazzicon-react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import 'rc-dialog/assets/bootstrap.css';
import GetNFt from './GetNft';
// import NFT from 'components/NFT';

const NewRight = () => {
    const addressInput = useRef(null);
    const [ nfts, setNfts ] = useState([]);
    const [ selected, setSelected ] = useState([]);
    const [ isOpen, setOpen ] = useState(false);
    const [ isAddressOpen, setAddressOpen ] = useState(false);
    const [ address, setAddress ] = useState('');
    const openModal = () => {
        // if(!address.length) return alert('Please input Counterparty address');
        // Moralis.Web3API.account.getNFTs({
        //     chain: 'polygon',
        //     address: address
        // }).then(nfts => {
        //     nfts.result?.sort((a, b) => (a.name > b.name) ? 1 : -1)
        //     setNfts(nfts.result || []);
        //     window.console.log(nfts);
        // });
        setOpen(true);
    };
    const openAddressModal = () => setAddressOpen(true);
    const closeModal = () => setOpen(false);
    const closeAddressModal = () => setAddressOpen(false);
    const onClickNFT = (i: number) => {
        return () => {
            selected.indexOf(nfts[i]) === -1 && setSelected([ ...selected, nfts[i]]);
        }
    }
    const onClickCard = (val: any) => {
        let index = selected.indexOf(val);
        index > -1 && setSelected(selected.slice(0, index).concat(selected.slice(index + 1, selected.length)));
    }
    const setCounterAddress = () => {
        setAddress(addressInput.current ? addressInput.current.value : '');
        setAddressOpen(false);
    }
    
    return (
        <Box position={"relative"} width={"50%"}>
        <Flex alignItems="center" gap={3}>
          <Text fontSize="xl" borderBottom="4px" borderBottomColor="green.400" fontFamily="futura">
            Counterparty Assets
          </Text>
          <Flex alignItems="center" gap={3} px={5} bg="green.400" rounded="md">
            <BsArrowLeft color='white' size={25} />
            <Text fontSize="lg" fontWeight="bold" color="white">
              IN
            </Text>
          </Flex>
        </Flex>
        {address ? (
          <Flex alignItems="center" gap={3} pt={5}>
            {/* Replace Jazzicon with Chakra UI styles */}
            {/* <Jazzicon address={address} className='w-8 h-8 border-2 border-black rounded-full' /> */}
            <Text>{address}</Text>
          </Flex>
        ) : (
          <Text pt={6}>Counterparty address not selected yet.</Text>
        )}
        <Flex flexWrap="wrap" alignItems="start" gap={3} pt={5} overflowY="auto">
          {/* {selected.map((val, key) => <NFT nft={val} onClick={onClickCard} key={key} />)} */}
        </Flex>
        <Button
          onClick={openAddressModal}
          style={{position: 'absolute',width:"2.5rem", height:"2.5rem", right: " 0.75rem", top: " 0.75rem", fontWeight:'bold', color: 'white' ,backgroundColor:'green', borderRadius:"999px",cursor:"pointer"}}
        
        >
          0x
        </Button>
        <AiOutlinePlus
          onClick={openModal}
          color='white'
          size={40}
          style={{position: 'absolute', right: "0.75rem", top: "4rem", fontWeight:'bold', color: 'white' ,backgroundColor:'gray', borderRadius:"999px" ,cursor:"pointer"}}
        />
        <Dialog
          title={<Text fontSize="lg" fontFamily="futura">Choose Assets</Text>}
          isOpen={isOpen}
          onClose={closeModal}
          motionPreset="slideInBottom"
        >
          <Flex divideX="1px" h="400px">
            <Flex flexDir="column" gap={3} pr={3} w="300px">
              <Text>Choose an NFT asset.</Text>
              <Flex flexDir="column" gap={3} p={2} overflowY="auto" bg="gray.200">
                <Text>Counterparty doesn't have any NFT.</Text>
              </Flex>
            </Flex>
            <Flex flexWrap="wrap" alignItems="start" gap={3} overflowY="auto">
              {/* {selected.map((val, key) => <NFT nft={val} onClick={onClickCard} key={key} />)} */}
            </Flex>
          </Flex>
        </Dialog>
        <Dialog
          title={<Text fontSize="lg" fontFamily="futura">Counterparty Address</Text>}
          isOpen={isAddressOpen}
          onClose={closeAddressModal}
          motionPreset="slideInBottom"
        >
          <Input
            type='text'
            ref={addressInput}
            className='w-full px-2 py-1 bg-gray-200 rounded-md outline-none'
            placeholder='Input counterparty address.'
          />
          <Button onClick={setCounterAddress} className='w-full py-1 mt-3 text-lg font-bold bg-green.400'>
            Confirm
          </Button>
        </Dialog>
      </Box>
    )
}

export default NewRight;