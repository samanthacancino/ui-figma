import './assets/styles/main.scss';
import ChallengeScss from './pages/ChallengeScss';
import ChallengeMui from './pages/ChallengeMui';
import Navigation from './components/Navigation';
import { Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <Navigation>
      <Switch>
        <Route path='/SCSS'>
        <ChallengeScss />
          </Route>
<Route path='/MaterialUI'>
  <ChallengeMui />
  </Route>
      </Switch>
    </Navigation>
  );
}

export default App;
