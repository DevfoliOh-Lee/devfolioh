import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@styles/GlobalStyles';
import { useEffect, useState } from 'react';
import { PostAPI } from '@api/postAPI';
import Home from '@pages/Home';
import Root from '@pages/Root';

function App() {
    const [ totalResult, setTotalResult ] = useState<number>( 0 );

    useEffect( () => {
        PostAPI.getTotalResult().then( ( data ) => {
            setTotalResult( data.totalResults );
        });
    }, [ totalResult ]);

    return (
        <BrowserRouter>
            <GlobalStyle />
            {/* <Home pages={ totalResult } /> */}
            <Root/>
        </BrowserRouter>
    );
}

export default App;
