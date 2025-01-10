import React from 'react';
import { Image, AspectRatio, Text, Card, CardHeader } from '@chakra-ui/react';
import diegoImage from '../../media/diego-yoyo.webp';

const RevealLaterCard = () => {
    return (
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
                    loading="lazy"
                />
            </AspectRatio>
        </Card>
    );
};

export default RevealLaterCard;
