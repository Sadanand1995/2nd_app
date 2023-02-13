import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <Container maxW={'container.xl'} height="100vh" p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing="8"
          w={['full', '96']}
          m="auto"
          my={'16'}
        >
          <Heading textAlign={'center'}>Video HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'20'} />
          <Input
            placeholder="Name"
            type={'text'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Email"
            type={'email'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Password"
            type={'password'}
            required
            focusBorderColor="purple.500"
          />
          <Button colorScheme={'purple'} type={'submit'}>
            Signup
          </Button>
          <HStack>
            <Text textAlign={'left'}>Alread have an account? </Text>
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/login'}>Login</Link>
            </Button>
          </HStack>
        </VStack>
      </form>
    </Container>
  );
}

export default Signup;
