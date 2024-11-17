import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import BirthTab from './Components/BirthTab';

function App() {
    return (
        <ChakraProvider>
            <BirthTab />
        </ChakraProvider>
    );
}

export default App;
