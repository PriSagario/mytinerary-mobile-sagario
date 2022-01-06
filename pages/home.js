import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ImageBackground,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const image = {
    uri: "https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

function Home() {
    let cities = [
        {
            name: "London",
            src: require("../assets/cityLondon.jpg"),
            description:
                "London, the capital of England and the United Kingdom, is a 21st century city with a history dating back to Roman times. At its center stand the imposing Palace of Parliament, the iconic Big Ben clock tower and Westminster Abbey, the site of British royal coronations. Across the River Thames, the London Eye offers panoramic views of the South Bank cultural complex and the entire city",
            country: "England",
        },
        {
            name: "Agra",
            src: require("../assets/cityAgra.jpg"),
            description:
                "Agra is a city in the northern state of Uttar Pradesh, India. The city is famous for being the capital of the Mughal emperors from 1526 to 1658. It is a major tourist destination for its many Mughal-era buildings such as Tāj Mahal",
            country: "India",
        },
        {
            name: "Rome",
            src: require("../assets/cityRoma.jpg"),
            description:
                "Rome, the capital of Italy, is a sprawling cosmopolitan city with nearly 3,000 years of world-influenced art, architecture and culture on display. Ancient ruins like those of the Forum and the Colosseum evoke the power of the ancient Roman Empire. Vatican City, the headquarters of the Roman Catholic Church, is home to St. Peter's Basilica and the Vatican Museums, which house masterpieces such as the frescoes in Michelangelo's Sistine Chapel.",
            country: "Italy",
        },
        {
            name: "Orlando",
            src: require("../assets/cityOrlando.jpg"),
            description:
                "New York includes 5 boroughs that are located where the Hudson River empties into the Atlantic Ocean. At its center is Manhattan, a densely populated district that is among the world's leading commercial, financial, and cultural centers. Its iconic sites include skyscrapers, such as the Empire State Building, and expansive Central Park. The Broadway Theater is located in the neon-lit Times Square area.",
            country: "USA",
        },
        {
            name: "Paris",
            src: require("../assets/cityParis.jpg"),
            description:
                "Paris, the capital of France, is a major European city and a world center for art, fashion, gastronomy and culture. Its 19th-century urban landscape is crisscrossed by wide boulevards and the River Seine. Aside from these landmarks such as the Eiffel Tower and the 12th-century Gothic Notre Dame Cathedral, the city is famous for its café culture and designer fashion shops along Rue du Faubourg Saint-Honoré.",
            country: "France",
        },
        {
            name: "Bali",
            src: require("../assets/cityBali.jpg"),
            description:
                "Bali, the famed Island of the Gods, with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces and barren volcanic hillsides all providing a picturesque backdrop to its colourful, deeply spiritual and unique culture, stakes a serious claim to be paradise on earth.",
            country: "Indonesia",
        },
        {
            name: "Misiones",
            src: require("../assets/cityMisiones.jpg"),
            description:
                "Tourism in Misiones continues to conquer thousands of travelers who come along every year to enjoy its natural tourist attractions, which have increased considerably in the last few years with the incorporation of cultural and historical destinations.",
            country: "Argentina",
        },
        {
            name: "Dubai",
            src: require("../assets/cityDubai.jpg"),
            description:
                "Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot, and the atmosphere is generally tolerant. Religious affiliations are not a prominent aspect of city life.",
            country: "United Arab Emirates",
        },
        {
            name: "Phi-Phi",
            src: require("../assets/cityPhiPhi.jpg"),
            description:
                "Phi Phi comprises 6 small islands about 46 km south of Phuket. Fine sandy beaches give way to soaring limestone cliffs to form spectacular scenery. Add crystal-clear water, a refreshing lack of roads, plus a laidback lifestyle.",
            country: "Thailand",
        },
        {
            name: "Rio de Janeiro",
            src: require("../assets/cityRio.jpg"),
            description:
                "Rio de Janeiro is the second largest city in Brazil, on the South Atlantic coast. Rio is famous for its breathtaking landscape, its laid back beach culture and its annual carnival. Although, their soccer skills here are very well recognized.",
            country: "Brazil",
        },
        {
            name: "Sidney",
            src: require("../assets/citySidney.jpg"),
            description:
                'Sydney, the capital of New South Wales, Australia. It is Australia oldest and largest city with a population of around 4 million. Sydney is built around a huge harbour and hosts many tourist attractions as well as a number of beaches, bays and a couple of national parks.',
            country: "Australia",
        },
        {
            name: "Tokyo",
            src: require("../assets/cityTokyo.jpg"),
            description:
                "Tokyo is located at the head of Tokyo Bay on the Pacific coast of central Honshu. It is the focus of the vast metropolitan area often called Greater Tokyo, the largest urban and industrial agglomeration in Japan.",
            country: "Japan",
        },
    ];

    let renderItems = ({ item, index }) => {
        return (
            <>
                <View key={index} style={styles.container}>
                    <Image
                        style={styles.carouselItem}
                        source={item.src}
                    />
                    <Text style={styles.carouselCity}>{item.name}</Text>
                </View>
            </>
        );
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.Text}>MyTinerary</Text>
                <Text style={styles.subtitle}>
                    Find your perfect trip, designed by insiders who know and
                    love their cities!
                </Text>
                <Button
                    title="Choose your dream destination!"
                    color="#c26700"
                    accessibilityLabel="Learn more about this purple button"
                />
            </ImageBackground>

            <Carousel
                data={cities}
                renderItem={renderItems}
                layoutCardOffset={10}
                sliderWidth={500}
                itemWidth={300}
                layout={"tinder"}
                loop={true}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5b30dcb",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        shadowColor: "#000",
        height: 60,
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    carouselItem: {
        width: "100%",
        height: "70%",
    },
    Text: {
        fontSize: 40,
        color: "#fae0af",
        margin:"24%",

    },
    subtitle: {
        fontSize: 20,
        fontStyle: "normal", 
        flex:1,
        justifyContent: "center",
    },
    carouselCity:{
        fontSize: 100,
        color: "#fae0af",
    }
});

export default Home;
