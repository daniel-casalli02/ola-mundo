import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  return (
        <View style={styles.container}>
      
      <Ionicons 
        name="school"
        size={80}
        color="#7B2FF7"
        style={styles.icone}
      />
      <Text style={styles.titulo}>Bem-vindo de volta!</Text>

      <Text style={styles.subtitulo}>
        Acesse sua conta do SENAI
      </Text>

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        style={styles.input}
        placeholder="seu@email.com"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Senha</Text>

      <View style={styles.inputContainer}>
        <Ionicons 
          name="lock-closed-outline" 
          size={20} 
          color="#999" 
        />

        <TextInput
          style={styles.inputSenha}
          placeholder="********"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />

        <Ionicons 
          name="eye-outline" 
          size={20} 
          color="#999" 
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icone: {
    marginBottom: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitulo: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },

  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
  },

  inputSenha: {
    flex: 1,
    marginHorizontal: 8,
  },

});

//aaaaaaaaaaaaaa