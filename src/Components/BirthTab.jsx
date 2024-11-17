import React from 'react';
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Heading,
} from '@chakra-ui/react';
import Loader from './Loader';
import RevealNameMain from './RevealName/RevealNameMain';
import BirthAnnouncement from './BirthAnnouncement/BirthAnnouncement';

const BirthTab = () => {
    return (
        <Loader loading>
            <main>
                <header>
                    <Heading as="h1" size="xl" color="teal">
                        Birth App
                    </Heading>
                </header>
                <Tabs
                    isFitted
                    // variant="soft-rounded"
                    colorScheme="teal"
                    size="lg"
                    defaultIndex={1}
                >
                    <TabList>
                        <Tab>🥁 Le prénom</Tab>
                        <Tab>👶 Le faire part</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <RevealNameMain />
                        </TabPanel>
                        <TabPanel>
                            <BirthAnnouncement />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </main>
        </Loader>
    );
};

export default BirthTab;
