import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesActions"
import CardCities from "../components/CardCity";

function Cities(props) {
  !props.cities[0] && props.getCities()
  
    return (

            <View style={styles.container}>
              <ScrollView>
                {
                  props.cities[0] && props.cities.map((city, index) =>(
                    <CardCities key={index} city={city} />
                  )
                  )
                }
              </ScrollView>
            </View>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
    },
    card:{
      width: "100%",
    }
});


const mapStateToProps = state => {
  return {
    cities: state.citiesReducer.cities,
  }
}


const mapDispatchToProps = {
  getCities: citiesActions.getCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)