import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';

const HomePage = () => {
  return (
    <Box className="w-full flex flex-col justify-center h-full items-center">
      <Thing>
        <h2>Alec Ostheimer</h2>
        <h2>Alec Ostheimer</h2>
      </Thing>
    </Box>
  );
};

export default HomePage;

const Thing = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

  font-family: 'Poppins', sans-serif;
  position: relative;

  h2 {
    color: #fff;
    font-size: 6em;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4;
  }

  h2:nth-child(2) {
    color: #03a9f4;
    animation: animate 4s ease-in-out infinite;
  }

  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }

    50% {
      clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
  }
`;
