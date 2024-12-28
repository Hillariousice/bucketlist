import { StyleSheet, View, TextInput, Button  } from "react-native";
import { useState } from "react";

function SubscribeEmail({ onSubmitEmail }) {
    const [emailSent, setEmailSent] = useState('');
  
    function emailInputHandler(email) {
      setEmailSent(email.trim());
    }
  
    function submitEmailHandler() {
      onSubmitEmail(emailSent);
      setEmailSent('');
    }
  
    return (
      <View style={styles.emailCon}>
        <TextInput
          placeholder="Your email"
          style={styles.inputField}
          value={emailSent}
          onChangeText={emailInputHandler}
        />
        <Button title="Add email" color="royalblue" onPress={submitEmailHandler} />
      </View>
    );
  }
  
  export default SubscribeEmail;
  
  const styles = StyleSheet.create({
    emailCon: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      borderWidth: 1,
      borderColor: 'royalblue',
      width: '80%',
      marginRight: 8,
      padding: 8,
    },
  });