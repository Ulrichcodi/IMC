import { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"

export default function App() {
  const [taille, setTaille] = useState(150)
  const [poids, setPoids] = useState(50)

  function calcul() {
    let p = parseInt(poids)
    let T = parseInt(taille)
    res = p / (T * T)
  }
  function diag() {
    let k = parseInt(res)
    if (k < 18.5) return "Insuffisance pondérale"
    if (k >= 18.5 && k < 24.9) return "Poids normal"
    if (k >= 25 && k < 29.9) return "Surpoids"
    if (k > 30) return "Obésité"
  }
  return (
    <View style={styles.container}>
      <Text>pour calculer votre 'IM', veillez saisir vos informations</Text>

      <TextInput
        style={styles.input}
        onChangeText={setPoids}
        value={poids}
        placeholder="entrer votre poids en kg"
      />

      <TextInput
        style={styles.input}
        onChangeText={setTaille}
        value={taille}
        placeholder="entrer votre taille en mètre"
      />
      <Button title="CALCULER" onPress={() => calcul} />
      <Text>
        votre "IMC" est de:{calcul}kg/m²+{diag}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
