import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cartao from './Cartao'

const previsaoItem = () => {
  return (
    <Cartao
        estilos={styles.cartao}>
            <View style={styles.tela}>
                <Image 
                    style={styles.imagem}
                    source={{
                        uri: ''
                    }}
                />
            </View>
    </Cartao>
  )
}

export default previsaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 4
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    }
})