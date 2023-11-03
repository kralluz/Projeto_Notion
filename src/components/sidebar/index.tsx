import { useState } from 'react';
import { Container } from './styles.js';
import { motion } from 'framer-motion';

export const SideBar = () => {

    const [ sidebarState, setSidebarState ] = useState(true)

    return(
        <Container
            position={sidebarState}
        >
            <h1>Flamengo</h1>
        </Container>
    )
};