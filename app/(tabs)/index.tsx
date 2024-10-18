import { useRef } from 'react'
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  const passRef = useRef<TextInput>(null)
  const usernameRef = useRef<TextInput>(null)

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>Header</Text>
            <TextInput
              placeholder='Email'
              keyboardType='email-address'
              returnKeyType='next'
              blurOnSubmit={false}
              onSubmitEditing={() => usernameRef.current?.focus()}
              style={styles.textInput}
            />
            <TextInput
              ref={usernameRef}
              placeholder='Username'
              returnKeyType='next'
              blurOnSubmit={false}
              onSubmitEditing={() => passRef.current?.focus()}
              style={styles.textInput}
            />
            <TextInput
              ref={passRef}
              placeholder='Password'
              secureTextEntry
              style={styles.textInput}
            />
            <View style={styles.btnContainer}>
              <Button title='Submit' onPress={() => null} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
})
