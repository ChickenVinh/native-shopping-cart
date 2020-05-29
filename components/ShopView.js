import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ShopView = () => {
    return (
        <View style={styles.container}>
            <Text>Shop</Text>
        </View>
    )
}

export default ShopView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
