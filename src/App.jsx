import React from 'react';
import { Router, Route, BrowserRouter } from 'react-router-dom';

//components
import { Wrapper } from './components';

//layout
import Header from './layout/Header';

export default function App(){
    return(
        <Wrapper>
            <Header />
        </Wrapper>
    );
}