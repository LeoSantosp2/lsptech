import React from 'react';
import { Container } from './styled';

interface IsLoading {
    isLoading: boolean;
}

export default function Loading(isLoading: IsLoading) {
    if (!isLoading.isLoading) return <></>;

    return (
        <Container>
            <div />

            <span>Carregando...</span>
        </Container>
    );
}
