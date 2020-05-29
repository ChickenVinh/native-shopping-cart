import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const CartView = () => {
    return (
        <View style={styles.container}>
            <Text>Cart</Text>
        </View>
    )
}

export default CartView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
