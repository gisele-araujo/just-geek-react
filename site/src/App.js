import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Artists from './components/pages/Artists';
import Cadastro from './components/pages/Cadastro';
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Product from './components/pages/Product';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/cadastro' component={Cadastro} />
                    <Route path='/artista' component={Artists} />
                    <Route path='/produto' component={Product} />
                    {/* <Route path='*' component={} /> */}
                </Switch>
            </Router>
        </>
    )
}

export default App;