import React, { useState } from 'react';
import { ScaleFade } from '@chakra-ui/react';
import RevealButtons from './RevealButtons';
import NameCard from './NameCard';
import RevealLaterCard from './RevealLaterCard';

const RevealNameMain = () => {
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
        <section>
            <RevealButtons
                handleYesButton={handleYesButton}
                handleNoButton={handleNoButton}
            />
            <ScaleFade
                in={showName}
                initialScale={0.9}
                unmountOnExit
                transition={{
                    enter: { duration: 0.5 },
                    exit: { duration: 0.25 },
                }}
            >
                <NameCard />
            </ScaleFade>
            <ScaleFade
                in={displayNoMessage}
                initialScale={0.9}
                unmountOnExit
                transition={{
                    enter: { duration: 0.5 },
                    exit: { duration: 0.25 },
                }}
            >
                <RevealLaterCard />
            </ScaleFade>
        </section>
    );
};

export default RevealNameMain;
