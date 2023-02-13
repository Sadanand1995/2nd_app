import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.lg'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          width={'fit-content'}
          borderBottom="2px solid"
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p="4"
          alignItems={'centre'}
          direction={['column', 'row']}
        >
          <Img src={img5} h={['60', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo velit
            iste accusantium ab dolor dolorum quas doloremque recusandae
            aliquid, animi consectetur, dolorem inventore nihil voluptates,
            consequuntur omnis vitae. Voluptates sit omnis harum ducimus laborum
            nam quaerat. Quis eius neque alias adipisci esse
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'upperCase',
  p: '4',
  size: '3xl',
};

const MyCarousel = () => (
  <Carousel
    autoPlay={true}
    infiniteLoop={true}
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={['30vh', '100vh']}>
      <Img src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The FUTURE
      </Heading>
    </Box>
    <Box w={'full'} h={['30vh', '100vh']}>
      <Img src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming is FUTURE
      </Heading>
    </Box>
    <Box w={'full'} h={['30vh', '100vh']}>
      <Img src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        gaming on console
      </Heading>
    </Box>
    <Box w={'full'} h={['30vh', '100vh']}>
      <Img src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        night life is awesome
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
