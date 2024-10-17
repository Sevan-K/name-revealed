import './App.css';
import { ChakraProvider, AspectRatio, Image } from '@chakra-ui/react';
import RevealNameMain from './Components/RevealNameMain';
import { useState, useEffect } from 'react';
import nameRevealLogo from './media/name-reveal-logo-192x192.png';

const delay = 1000; //1s
let setTimeoutInstance;

export const Loader = ({ loading, children }) => {
    const [isExpired, setIsExpired] = useState(true);

    useEffect(() => {
        if (loading) {
            setIsExpired(false);

            if (setTimeoutInstance) {
                clearTimeout(setTimeoutInstance);
            }
            setTimeoutInstance = setTimeout(() => {
                setIsExpired(true);
            }, delay);
        }
    }, [loading]);

    if (!isExpired) {
        return (
            <div className="loader">
                <AspectRatio maxW="192px" >
                    <Image
                        src={nameRevealLogo}
                        alt="Image of the name 'Noam' in cursive style, knitted with a fine Prussian blue thread on a wooden background"
                        objectFit="contain"
                        loading="lazy"
                    />
                </AspectRatio>
            </div>
        );
    }

    return children;
};

function App() {
    return (
        <ChakraProvider>
            <Loader loading>
                <RevealNameMain />
            </Loader>
        </ChakraProvider>
    );
}

export default App;
