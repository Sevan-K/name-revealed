import React from 'react';
import { Image, AspectRatio, Text, Card, CardFooter } from '@chakra-ui/react';
import nameImage from '../media/name-revealed.webp';

const NameCard = () => {
    return (
        <Card maxW="100%">
            <AspectRatio maxW="100%" ratio={4 / 3}>
                <Image
                    src={nameImage}
                    alt="Image of the name 'Noam' in cursive style, knitted with a fine Prussian blue thread on a wooden background"
                    objectFit="cover"
                    loading="lazy"
                />
            </AspectRatio>
            <CardFooter justify="center">
                <Text fontSize="2rem" color="teal">
                    Il s'appelle Noam 👶
                </Text>
            </CardFooter>
        </Card>
    );
};

export default NameCard;
