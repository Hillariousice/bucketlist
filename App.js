import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, FlatList, Button} from 'react-native';
import BucketInput from './components/BucketInput';
import BucketItem from './components/BucketItem';
import SubscribeEmail from './components/SubscribeEmail';
 

export default function App() {
  const [bucketList, setBucketList] = useState([]);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);

 function modalIsOpen(){
 setIsOpen(true);
 }
 function modalIsClose(){
  setIsOpen(false);
  }
  function addInputHandler(enteredBucketText) {
    if (!enteredBucketText) {
      Alert.alert('Invalid Input', 'Bucket list item cannot be empty.');
      return;
    }
    setBucketList((currentList) => [
      ...currentList,
      { text: enteredBucketText, id: Date.now().toString() },
    ]);
    modalIsClose();
  }

  function submitEmailHandler(emailSent) {
    if (!emailSent || !emailSent.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    setSubmittedEmail(emailSent);
    Alert.alert('Success', 'You have successfully subscribed!');
  }

  function deleteBucketHandler(id) {
    setBucketList((currentList) => currentList.filter((bucket) => bucket.id !== id));
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appCon}>
      <Button title='Add to List' color="royalblue" onPress={modalIsOpen}/>

      <BucketInput onAddBucket={addInputHandler} isOpen={isOpen} cancel={modalIsClose}/>

      <View style={styles.bucketCon}>
        <Text style={styles.bucketText}>Bucket lists ...</Text>
        <FlatList
          data={bucketList}
          renderItem={(itemData) => (
            <BucketItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={deleteBucketHandler}
            />
          )}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
      <View style={styles.newCon}>
        <Text style={styles.newText}>Subscribe today!</Text>
        <SubscribeEmail onSubmitEmail={submitEmailHandler} />
        {submittedEmail ? (
          <Text style={styles.submittedText}>
            Subscribed Email: {submittedEmail}
          </Text>
        ) : null}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appCon: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,

  },
  bucketCon: {
    flex: 6,
  },
  bucketText: {
    color: 'purple',
    fontSize: 20,
  },
  newCon: {
    flex: 1,

  },
  newText: {
    color: 'purple',
    fontSize: 20,
  },
  submittedText: {
    marginTop: 10,
    fontSize: 14,
    color: 'purple',
  },
 
});