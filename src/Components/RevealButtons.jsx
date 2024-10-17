import React from 'react';
import { Stack, Box, Button, Heading, Highlight } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

const RevealButtons = ({ handleYesButton, handleNoButton }) => {
    const [isDesktop] = useMediaQuery('(min-width: 400px)');
    
    return (
        <article>
            <Heading as="h2" size="lg">
                <Highlight
                    query="prénom"
                    styles={{
                        px: '2',
                        py: '1',
                        rounded: 'full',
                        bg: 'teal.100',
                    }}
                >
                    Envie de découvirir son prénom ?
                </Highlight>
            </Heading>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                py={12}
                mb={2}
            >
                <Stack gap="4" direction={isDesktop ? 'row' : 'column'}>
                    <Button
                        colorScheme="teal"
                        aria-label="Button to reveal the name."
                        onClick={handleYesButton}
                    >
                        Bah, oui 😁
                    </Button>
                    <Button
                        colorScheme="yellow"
                        aria-label="Button not to reveal the name."
                        onClick={handleNoButton}
                    >
                        Hum, non 🥶
                    </Button>
                </Stack>
            </Box>
        </article>
    );
};

export default RevealButtons;
