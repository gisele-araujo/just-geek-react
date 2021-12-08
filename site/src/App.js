import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Artists from './components/pages/Artists';
import Cadastro from './components/pages/Cadastro';
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Purchase from './components/pages/purchase/Purchase';
import Product from './components/pages/Product';
import Search from './components/pages/Search';
import Profile from './components/pages/profile/Profile';

const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/login/produto/:id' component={Login} />
                    <Route path='/cadastro' component={Cadastro} />
                    <Route path='/artista/:id' component={Artists} />
                    <Route path='/produto/:id' component={Product} />
                    <Route path='/pesquisa/:id' component={Search} />
                    <Route path='/compra' component={Purchase} />
                    <Route path='/perfil' component={Profile} />
                    {/* <Route path='*' component={} /> */}
                </Switch>
            </Router>
        </>
    )
}

export default App;