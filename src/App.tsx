import {Switch, Route, Redirect} from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div>
      <Switch>
        <Redirect path="/" exact={true} to ="/dashboard" />
        <Route path="/dashboard" exact={true} component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
