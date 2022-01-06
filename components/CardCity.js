import React, { useEffect } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native'

const CardCities = (props)=>{
    const {city } = props
    if(!city){
        return null
    }
    useEffect(()=>{

    })
    
    const imagenUri = city.src.slice(15,(city.src.length))
    return(
        <View style={styles.padre}>
            <View style={styles.contenedorFotoTexto}>
                <TouchableOpacity style={styles.contenedorFoto} activeOpacity={0.7} >
                    <ImageBackground loadingIndicatorSource={{uri:'https://loading.io/asset/482091'}} style={styles.foto} source={{uri:`https://mytinerary-sagario.herokuapp.com/assets/cities/${imagenUri}`}
                }>  
                    <View style={styles.photo}>
                        <Text style={styles.textoCity}>
                            {city.name}
                        </Text>
                    </View>
                    </ImageBackground>
                </TouchableOpacity>
                <Text>

                </Text>
            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    padre:{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#ff9946",
    },
    contenedorFotoTexto:{
        flexDirection:'row',
        height:200,
        borderRadius:8,
        overflow:'hidden',
    },
    contenedorFoto:{
        width:'100%',
        height:'100%',
    },
    foto:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'

    },
    photo:{
        alignItems:'center',
        backgroundColor:'#665e587e',
        paddingVertical:7.5
    },
    textoCity:{
        color:'white',
        fontSize:18
    }

})

export default CardCities