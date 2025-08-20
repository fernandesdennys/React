import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/expamples/Home'
import NotFound from '../../views/expamples/NoFound'
import UseState from '../../views/expamples/UseState'
import UseEffect from '../../views/expamples/UseEffect'
import UseRef from '../../views/expamples/UseRef'
import UseCallback from '../../views/expamples/UseCallback'
import UseMemo from '../../views/expamples/UseMemo'
import UseContext from '../../views/expamples/UseContext'
import UseReducer from '../../views/expamples/UseReducer'
import UseCustom from '../../views/expamples/UseCustom'

const Content = (props) => (
  <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/useState">
        <UseState />
      </Route>
      <Route path="/useEffect">
        <UseEffect />
      </Route>
      <Route path="/useRef">
        <UseRef />
      </Route>
      <Route path="/useCallback">
        <UseCallback />
      </Route>
      <Route path="/useMemo">
        <UseMemo />
      </Route>
      <Route path="/useContext">
        <UseContext />
      </Route>
      <Route path="/useReducer">
        <UseReducer />
      </Route>
      <Route path="/useCustom">
        <UseCustom />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </main>
);

export default Content;
