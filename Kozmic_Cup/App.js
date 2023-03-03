import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Products/>
    </View>
  );
}

const [status, setStatus] = useState("Escolha um produto")

useEffect(() => {
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Products = props=>{return (
  <View style = {styles.container}>
    <Coffee name="Alien Brew Coffee"/>
    <Coffee name="Out of This World Coffee"/>
    <Coffee name="Starbeans Coffee"/>
  </View>
)}

const Coffee = props=>{return (
  <View style = {styles.container}>
    <Image/>
    <Text>{props.name}</Text>
    <Text>{status}</Text>
    <Button onClick={()=>status == "Escolha um produto" ? setStatus("Preparando Produto...")}></Button>

  </View>
)}


