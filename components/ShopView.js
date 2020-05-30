import React from 'react'
import { Content, Header, Body, Title, Container, Card, ListItem, Text, Right, Button } from 'native-base'
import { Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

const ShopView = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const createItemList = state.items.map(item => {
        return (
            <Card key={item.id}>
                <ListItem noBorder>
                    <Image source={item.img} style={{ width: 373.3 }} />
                </ListItem>
                <ListItem noBorder>
                    <Body><Text>{item.title}</Text></Body>
                    <Right>
                        <Button success rounded><Text>+</Text></Button>
                    </Right>
                </ListItem>
                <ListItem noBorder>
                    <Body><Text>{item.desc}</Text></Body>
                </ListItem>
                <ListItem><Body><Text>Price: {item.price}€</Text></Body></ListItem>
            </Card>
        )
    })

    return (
        <Container>
            <Header>
                <Body><Title>Avocado Store</Title></Body>
            </Header>
            <Content padder>
                {/*map */}
                {createItemList}
            </Content>
        </Container>
    )
}

export default ShopView
