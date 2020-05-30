import React from 'react'
import { Header, Content, Text, ListItem, CheckBox, Body, Card, Button, Title, Container, Thumbnail, Left, Right } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'

const CartView = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const createCartList = state.addedItems.length ? (
        state.addedItems.map(item => {
            return (
                <ListItem noBorder key={item.id}>
                    <Left>
                        <Thumbnail square source={item.img} />
                        <Text style={{ marginLeft: 35 }}>{item.quantity}x</Text>
                    </Left>
                    <Body>
                        <Text>{item.title}</Text>
                    </Body>
                    <Right>
                        <Text>{item.price * item.quantity}€</Text>
                    </Right>
                </ListItem>
            )
        })
    ) :
        (
            <ListItem noBorder>
                <Text>Nothing.</Text>
            </ListItem>
        )

    return (
        <Container>
            <Header>
                <Body>
                    <Title>My Cart</Title>
                </Body>
            </Header>
            <Content padder>
                <Card>
                    {createCartList}
                </Card>
                <Card>
                    <ListItem noBorder>
                        <CheckBox />
                        <Body>
                            <Text>Shipping (+6$)</Text>
                        </Body>
                    </ListItem>
                    <ListItem noBorder>
                        <Text style={{ fontWeight: 'bold' }}>Total: {state.total}€</Text>
                    </ListItem>
                    <ListItem noBorder>
                        <Button success rounded style={{ width: '100%', justifyContent: 'center' }}>
                            <Text>Checkout</Text>
                        </Button>
                    </ListItem>
                </Card>
            </Content>
        </Container>
    )
}

export default CartView