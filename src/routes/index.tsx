import { Routes as Switch, Route } from "react-router-dom";

import { RickAndMortyProvider } from "../contexts/rickAndMorty";
import { Home } from "../pages/Home";
import { Characters } from "../pages/Characters";
import { Places } from "../pages/Places";
import { Episodes } from "../pages/Episodes";

function Routes() {
  return (
    <RickAndMortyProvider>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/places" element={<Places />} />
        <Route path="/episodios" element={<Episodes />} />
      </Switch>
    </RickAndMortyProvider>
  );
}

export default Routes;
