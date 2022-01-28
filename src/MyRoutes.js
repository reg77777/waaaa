import {BrowserRouter,Route,Routes,Link,Navigate} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Lifegame from './Lifegame'

function MyRoutes(){
    return(
        <Routes>
            <Route path='/waaaa/' element={<Home />}/>
            <Route path='/waaaa/about' element={<About />}/>
            <Route path='/waaaa/lifegame' element={<Lifegame />}/>
        </Routes>
    );
}

export default MyRoutes;
