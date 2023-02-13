import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        color="current"
        p={'0'}
        w={'14'}
        h={'10'}
        zIndex={'overlay'}
        borderLeftRadius={'0'}
        borderRightRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton borderRadius={'full'} />
          <DrawerHeader>VideoHUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/videos">Videos</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/videos?category=free">FREE Videos</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/upload">Upload video</Link>
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              width={'full'}
              justifyContent={'space-evenly'}
            >
              <Button
                colorScheme={'purple'}
                variant={'outline'}
                onClick={onClose}
              >
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'outline'}
                onClick={onClose}
              >
                <Link to={'/signup'}>Signup</Link>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
