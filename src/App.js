import './App.css';
import {
    ChakraProvider,
    Image,
    AspectRatio,
    Stack,
    Box,
    Button,
    Heading,
    Text,
    Highlight,
    Card,
    CardHeader,
    CardFooter,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import nameImage from './name-revealed.webp';
import diegoImage from './diego-yoyo.webp';

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

    const [isDesktop] = useMediaQuery('(min-width: 400px)');

    return (
        <ChakraProvider>
            <main>
                <Heading as="h1" size="xl" color="teal">
                    Name revealed 🥁
                </Heading>

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
                        </Stack>
                    </Box>
                    {showName && (
                        <Card maxW="100%">
                            <AspectRatio maxW="100%" ratio={4 / 3}>
                                <Image
                                    src={nameImage}
                                    alt="Image of the name 'Noam' in cursive style, knitted with a fine Prussian blue thread on a wooden background"
                                    objectFit="cover"
                                />
                            </AspectRatio>
                            <CardFooter justify="center">
                                <Text fontSize="2rem" color="teal">
                                    Il s'appelle Noam 👶
                                </Text>
                            </CardFooter>
                        </Card>
                    )}
                    {displayNoMessage && (
                        <Card maxW="100%">
                            <CardHeader>
                                <Text fontSize="2rem" color="teal">
                                    Peut être plus tard 😉
                                </Text>
                            </CardHeader>
                            <AspectRatio maxW="100%" ratio={5 / 6}>
                                <Image
                                    src={diegoImage}
                                    alt="Image of the famous cat Diego on a yoyo"
                                    objectFit="cover"
                                />
                            </AspectRatio>
                        </Card>
                    )}
                </article>
            </main>
        </ChakraProvider>
    );
}

export default App;
