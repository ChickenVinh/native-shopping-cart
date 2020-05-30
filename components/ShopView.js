import React from 'react'
import { Content, Header, Body, Title, Container, Card, ListItem, Text, Right, Button } from 'native-base'
import { Image } from 'react-native'
import dummy from './tasty.jpg'

const ShopView = () => {
    return (
        <Container>
            <Header>
                <Body><Title>Avocado Store</Title></Body>
            </Header>
            <Content padder>
                {/*map */}
                <Card>
                    <ListItem noBorder>
                        <Image source={dummy} style={{ width: 373.3 }} />
                    </ListItem>
                    <ListItem noBorder>
                        <Body><Text>product name</Text></Body>
                        <Right>
                            <Button success rounded><Text>+</Text></Button>
                        </Right>
                    </ListItem>
                    <ListItem noBorder>
                        <Body><Text>product description</Text></Body>
                    </ListItem>
                    <ListItem><Body><Text>Price: xxx€</Text></Body></ListItem>
                </Card>
            </Content>
        </Container>
    )
}

export default ShopView
