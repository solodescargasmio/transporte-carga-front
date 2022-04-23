import React from 'react';
import { Dropdown, Grid, Header, Icon, Segment, TextArea } from 'semantic-ui-react';
import HeaderDinamic from '../../layouts/Header';

const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]

const Consult = () => {
    return (
        <>
        <Grid stackable container divided="vertically">
            <Segment basic><HeaderDinamic title={"Consulta"}/></Segment>        
            <Grid.Row centered columns={2} >
                <Grid.Column>                
                    <Segment basic><Header as='h5' className="Text">
                            <Icon name='check square outline'/> Vehículos registrados
                        </Header> </Segment><Segment basic> <Dropdown text='Selecione...' options={options} item button /></Segment>
                </Grid.Column>
                <Grid.Column >
                    <Segment basic>
                        <Header as='h5' className="Text">
                            <Icon name='info circle'/> Información
                        </Header>       
                    </Segment>
                    <Segment basic>
                    <TextArea></TextArea>
                    </Segment>
                    
                             
                
                </Grid.Column>
                
                
            </Grid.Row>                  
        </Grid>
        
        </>
    )
}

export default Consult;