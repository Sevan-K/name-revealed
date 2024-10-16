import './App.css';
import {
    ChakraProvider,
    Image,
    AspectRatio,
    Stack,
    Box,
    Button,
    ButtonGroup,
    Heading,
    Text,
    Highlight,
} from '@chakra-ui/react';
import nameImage from './name-revealed.webp';
import { useState } from 'react';

function App() {
    const [showName, setShowName] = useState(false);
    const [displayNoMessage, setDisplayNoMessage] = useState(false);
    const handleYesButton = () => {
        setDisplayNoMessage(false);
        setShowName(true);
    };
    const handleNoButton = () => {
        setDisplayNoMessage(true);
        setShowName(false);
    };

    return (
        <ChakraProvider>
            <main>
                <article>
                    <Heading as="h1" size="lg" noOfLines={1}>
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

                    <Stack direction="column">
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            width="100%"
                            py={12}
                            mb={2}
                        >
                            <ButtonGroup gap="4">
                                <Button
                                    colorScheme="teal"
                                    onClick={handleYesButton}
                                >
                                    Bah, oui 😁
                                </Button>
                                <Button
                                    colorScheme="yellow"
                                    onClick={handleNoButton}
                                >
                                    Hum, non 🥶
                                </Button>
                            </ButtonGroup>
                        </Box>
                    </Stack>
                    {showName && (
                        <AspectRatio maxW="100%" ratio={4 / 3}>
                            <Image
                                src={nameImage}
                                alt="naruto"
                                objectFit="cover"
                            />
                        </AspectRatio>
                    )}
                    {displayNoMessage && (
                        <Text fontSize="2rem" color="teal">
                            Peut être plus tard 😉
                        </Text>
                    )}
                </article>
            </main>
        </ChakraProvider>
    );
}

export default App;
