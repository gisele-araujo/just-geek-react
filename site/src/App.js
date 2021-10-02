import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Art from './components/pages/artists/Art';
import Artists from './components/pages/artists/Artists';
import Cadastro from './components/pages/Cadastro';
import Home from "./components/pages/Home";
import Login from './components/pages/Login';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/cadastro' component={Cadastro} />
                    <Route path='/artista' component={Artists} />
                    <Route path='/arte' component={Art} />
                    {/* <Route path='*' component={} /> */}
                </Switch>
            </Router>
        </>
    )
}

export default App;