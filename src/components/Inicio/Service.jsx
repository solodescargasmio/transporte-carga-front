import React from 'react';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
import ImageTransport from './Image';


const Service = () => {
    return (
        <Grid stackable columns={2} textAlign="center" container divided="vertically">
    <Grid.Column>
      <Segment basic/>
      <ImageTransport/>
    </Grid.Column>
    <Grid.Column>
        <Segment basic/>
        <Segment basic/>
        <Segment basic>
          <Header as='h3' id="Text">¿Necesitas transportar mercancía de un punto A a un punto B?</Header>
        </Segment>
        <Segment basic>
          <Button primary id="Text">Solicitar servicio</Button>
        </Segment>
    </Grid.Column>
  </Grid>
    );
}

export default Service;