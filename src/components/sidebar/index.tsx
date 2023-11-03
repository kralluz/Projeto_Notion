import { useState } from 'react';
import { Container } from './styles';
import { NewPage } from './newPage';

export const SideBar = () => {

    const [ sidebarState, setSidebarState ] = useState(true)
    return(
        <Container
            position={sidebarState}>
            <NewPage />
            <h1>teste</h1>
        </Container>
    )
};