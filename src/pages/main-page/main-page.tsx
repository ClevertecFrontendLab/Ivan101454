import React, { useState } from 'react';
import Header from "./components/header/header.tsx";

import './main-page.css';
import Body from './components/body/body.tsx';

export const MainPage: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Body />
        </>
    );
};
