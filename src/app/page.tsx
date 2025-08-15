'use client';
import { Box, Heading, Button, VStack, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box p={8} bg="#0B0B0B" minH="100vh" color="#F9F9F9">
      <VStack spacing={8} align="center">
        <Heading color="#D4AF37" size="2xl">
          8VULTUS
        </Heading>
        
        <Text color="#F9F9F9" fontSize="lg">
          Sacred Technology Platform
        </Text>
        
        <Button 
          bg="linear-gradient(45deg, #00FF84, #FF00C8)"
          color="#0B0B0B"
          size="lg"
          px={8}
          _hover={{ transform: 'translateY(-2px)' }}
        >
          Begin Initiation
        </Button>
        
        <Text fontSize="sm" color="#00FF84">
          🔮 Sacred Theme Active
        </Text>
      </VStack>
    </Box>
  );
}
