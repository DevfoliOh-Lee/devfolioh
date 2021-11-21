import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '@pages/Home';
import Detail from '@pages/Detail';

function Root() {
    return(
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/post/:postId" element={ <Detail/> } />
        </Routes>
    )
};

export default Root;