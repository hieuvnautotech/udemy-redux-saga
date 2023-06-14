import "./App.css";
import {
  Container,
  Header,
  Statistic,
  Segment,
  Grid,
  Icon,
  Form,
  Button,
} from "semantic-ui-react";
import MainHeader from './components/MainHeader'
import ButtonOkOrCancel from './components/ButtonOkOrCancel'
function App() {
  return (
    <Container>
      {/* <Header as="h1">Budget</Header> */}
      <MainHeader title="Budget" type="h1" />
      <Statistic size="small">
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2,55.53</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ texAlign: "left" }}>
                  Income
                </Statistic.Label>
                <Statistic.Value>2,55.53</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ texAlign: "left" }}>
                  Expenses
                </Statistic.Label>
                <Statistic.Value>2,55.53</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* <Header as="h3">History</Header> */}
      <MainHeader title="History" type="h3" />

      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* <Header as="h3">Add new transaction</Header> */}
      <MainHeader title="Add new transaction" type="h3" />

      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            placeholder="New shinny thing"
            width={12}
            label="Description"
          />
          <Form.Input
            width={4}
            label="Value"
            placeholder="100"
            icon="dollar"
            iconPosition="left"
          />
        </Form.Group>
        {/* <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or></Button.Or>
          <Button primary>OK</Button>
        </Button.Group> */}
        <ButtonOkOrCancel/>
      </Form>
    </Container>
  );
}

export default App;
