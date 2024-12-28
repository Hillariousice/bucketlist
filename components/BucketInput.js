import { StyleSheet, View, TextInput, Alert, Button, Modal, Image } from "react-native";
import { useState } from "react";

function BucketInput({ onAddBucket, isOpen, cancel}) {
    const [enteredBucketText, setEnteredBucketText] = useState('');
  
    function bucketInputHandler(enteredText) {
      setEnteredBucketText(enteredText.trim());
    }
  
    function addBucketHandler() {
      if (enteredBucketText === '') {
        Alert.alert('Invalid Input', 'Bucket list item cannot be empty.');
        return;
      }
      onAddBucket(enteredBucketText);
      setEnteredBucketText('');
    }
  
    return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputCon}>
      <Image source={require('../assets/images/bucketTravel.png')} style={styles.imageCon}/>
        <TextInput
          placeholder="Your bucket list"
          style={styles.inputField}
          value={enteredBucketText}
          onChangeText={bucketInputHandler}
        />
        <View style={styles.buttonCon}>
        <View style={styles.button}>
        <Button title="Cancel" color="red" onPress={cancel}/>
        </View>
        <View style={styles.button}>
        <Button title="Add list" color="purple" onPress={addBucketHandler} />
        </View>
        </View>
      </View>
      </Modal>
    );
  }
  
  export default BucketInput;
  
  const styles = StyleSheet.create({
    inputCon: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    
    },
    imageCon: {
      width: "60%",
      height: "30%",
    },
    inputField: {
      borderWidth: 1,
      borderColor: 'purple',
      backgroundColor: '#E6E6FA',
      width: '90%',
      borderRadius: 6,
      padding: 16,
      color: 'purple'
    },
    buttonCon: {
      marginTop: 16,
      flexDirection: "row"
    },
    button :{
      width: "30%",
      marginHorizontal: 8
    },
   
  });