import {Route, Routes} from 'react-router-dom';

import {Layout} from './components';
import {MoviesPage} from './pages';
import {apiKey} from './configs/url';

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                    {/*<Route path={`discover/movie?api_key=${apiKey}`} element={<MoviesPage/>}/>*/}
                </Route>
            </Routes>
        </div>)
}

export default App;
