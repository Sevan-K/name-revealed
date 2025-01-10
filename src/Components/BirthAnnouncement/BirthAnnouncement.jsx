import React from 'react';
import {
    Image,
    Text,
    Card,
    CardFooter,
    Flex,
    useMediaQuery,
} from '@chakra-ui/react';
import calandarIcon from '../../media/calendar.png';
import weighingMachineIcon from '../../media/weighing-machine.png';
import heightIcon from '../../media/height.png';
import helloWorldNoam from '../../media/hello-world-noam.jpeg';

const BirthAnnouncement = () => {
    const [isDesktop] = useMediaQuery('(min-width: 712px)');

    return (
        <section>
            <article>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="2rem"
                >
                    <Image
                        src={helloWorldNoam}
                        alt="Image Noam smiling and saying Hello World!"
                        objectFit="cover"
                        loading="lazy"
                        borderRadius="1rem"
                        boxSize={isDesktop ? '50%' : '75%'}
                    />
                </Flex>
                {/* TODO: use a map instead of repeating cards */}
                <Flex
                    flexDirection={isDesktop ? 'row' : 'column'}
                    justifyContent="center"
                    alignItems={isDesktop ? 'stretch' : 'center'}
                    gap="2rem"
                    marginTop="2rem"
                >
                    <Card maxW="75%" align="center" padding="2rem 0 0 0">
                        <Image
                            src={calandarIcon}
                            alt="Calendar icon"
                            objectFit="cover"
                            loading="lazy"
                            width="25%"
                        />
                        <CardFooter justify="center">
                            <Text fontSize="1.5rem" color="teal.700">
                                Il est né le 23/11/2024
                            </Text>
                        </CardFooter>
                    </Card>
                    <Card maxW="75%" align="center" padding="2rem 0 0 0">
                        <Image
                            src={weighingMachineIcon}
                            alt="Calendar icon"
                            objectFit="cover"
                            loading="lazy"
                            width="25%"
                        />
                        <CardFooter justify="center">
                            <Text fontSize="1.5rem" color="teal.700">
                                Pesait 3,040 kg
                            </Text>
                        </CardFooter>
                    </Card>
                    <Card maxW="75%" align="center" padding="2rem 0 0 0">
                        <Image
                            src={heightIcon}
                            alt="Calendar icon"
                            objectFit="cover"
                            loading="lazy"
                            width="25%"
                        />
                        <CardFooter justify="center">
                            <Text fontSize="1.5rem" color="teal.700">
                                Mesurait 50,5 cm
                            </Text>
                        </CardFooter>
                    </Card>
                </Flex>
            </article>
        </section>
    );
};

export default BirthAnnouncement;
