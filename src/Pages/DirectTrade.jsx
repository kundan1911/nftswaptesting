import React, { Fragment, useState } from 'react';
import NewLeft from '../Components/NewLeft';
import NewRight from '../Components/NewRight'
import { Flex, Box, Button, Text } from '@chakra-ui/react';

// import 'assets/styles/index.css';
const DirectTrade = () => {
    const [ step, setStep ] = useState(1);

    return (
        <>
        <Flex alignItems="center" justifyContent="space-between" px={5} py={3} borderTop="1px" borderBottom="1px">
        <Box>
          <Text pr={5} fontFamily="futura">Step {step} of 2</Text>
          <Text fontSize="sm">
            {step === 1 ?
              'Select ERC721, ERC1155, ERC20, or Ethereum token from both parts' :
              'Approve and pay to generate the trade for your counterparty'
            }
          </Text>
        </Box>
        <Button onClick={() => setStep(3 - step)} px={10} py={3} bg="green.400" fontFamily="futura">
          {step === 1 ? 'NEXT' : 'PREV'}
        </Button>
      </Flex>
      <Flex height="100%" divideX="1px">
        <NewLeft />
        <NewRight />
      </Flex>
      </>
    )
}

export default DirectTrade;