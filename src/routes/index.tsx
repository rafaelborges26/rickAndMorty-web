import { Routes as Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { PokemonsProvider } from '../contexts/pokemons'

const Routes = () => {
    return (
        <PokemonsProvider>
            <Switch>
                <Route path='/' element={<Home/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Switch>
        </PokemonsProvider>
    )
}

export default Routes;