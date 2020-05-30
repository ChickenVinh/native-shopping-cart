import React from 'react'
import { Header, Content, Text, ListItem, CheckBox, Body, Card, Button, Title, Container } from 'native-base'

const CartView = () => {
    return (
        <Container>
            <Header>
                <Body>
                    <Title>My Cart</Title>
                </Body>
            </Header>
            <Content padder>
                <Card>
                    <ListItem noBorder>
                        <Text>Item #1</Text>
                    </ListItem>
                    <ListItem noBorder>
                        <Text>Item #2</Text>
                    </ListItem>
                    <ListItem noBorder>
                        <Text>Item #3</Text>
                    </ListItem>
                </Card>
                <Card>
                    <ListItem noBorder>
                        <CheckBox />
                        <Body>
                            <Text>Shipping (+6$)</Text>
                        </Body>
                    </ListItem>
                    <ListItem noBorder>
                        <Text>Total: xxx$</Text>
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