import React, { useState } from 'react';
import { Heading, ScaleFade } from '@chakra-ui/react';
import RevealButtons from './RevealButtons';
import NameCard from './NameCard';
import RevealLaterCard from './RevealLaterCard';
import Loader from './Loader';

function RevealNameMain() {
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
        <Loader loading>
            <main>
                <header>
                    <Heading as="h1" size="xl" color="teal">
                        Name revealed 🥁
                    </Heading>
                </header>

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
            </main>
        </Loader>
    );
}

export default RevealNameMain;
