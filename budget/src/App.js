import './App.css';
import { Container, Header, Statistic } from 'semantic-ui-react'
function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2,55.53</Statistic.Value>
      </Statistic>
      
    </Container>
  );
}

export default App;
