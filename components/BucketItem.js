import { StyleSheet, View, Text, Pressable  } from "react-native";


function BucketItem({text, id ,onDeleteItem}) {

 return (
    
      <View style={styles.bucketLisText}>
          <Pressable
           android_ripple={{ color: 'royalblue'}} 
           onPress={() => onDeleteItem(id)}
           style={({pressedData}) => pressedData && styles.pressedItem}>

            <Text style={styles.bucketListText}>{text}</Text>
            </Pressable>
        </View>
     
 )
}

export default BucketItem;

const styles = StyleSheet.create({
    bucketLisText: {
        margin: 8,
        fontSize: 12,
        backgroundColor: 'blue',
        borderRadius: 6,
     
       },
       pressedItem: {
        opacity: 0.5
       },
    bucketListText: {
        color: 'white',
        padding: 8
      },
})