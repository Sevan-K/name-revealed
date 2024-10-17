import React, { useState, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';
import nameRevealLogo from '../media/name-reveal-logo-192x192.png';

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
                <img
                    src={nameRevealLogo}
                    alt="The name 'Noam' in cursive style, knitted with a fine Prussian blue thread on a wooden background"
                    loading="lazy"
                />
                <Spinner color="teal.500" size="xl" />
            </div>
        );
    }

    return children;
};

export default Loader;
