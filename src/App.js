import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import RevealNameMain from './Components/RevealNameMain';

function App() {
    return (
        <ChakraProvider>
            <RevealNameMain />
        </ChakraProvider>
    );
}

export default App;
