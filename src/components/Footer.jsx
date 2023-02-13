import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai';

function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']} spacing={['8', '0']}>
        <VStack alignItems={'stretch'} w="full" px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline="none"
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video hub
          </Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <HStack justifyContent={'space-between'} spacing={'10'}>
            <Button variant={'link'} colorScheme={'purple'}>
              <a target={'blank'} href="https://youtube.com">
                <AiFillYoutube size={'50px'} />
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
              <a target={'blank'} href="https://instagram.com">
                <AiFillInstagram size={'40px'} />
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
              <a target={'blank'} href="https://youtube.com">
                <AiFillGithub size={'40px'} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
