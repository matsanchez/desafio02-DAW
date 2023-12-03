import { View, StyleSheet } from 'react-native'
import { IconButton,TextInput, MD3Colors } from 'react-native-paper';

const CustomInput = ({placeholderProp, textItemProp, onChangeTextHandlerEvent, addItemToListHandlerEvent})=>{
    return (
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.containerTextInput}
          label={placeholderProp}
          value={textItemProp}
          mode='flat'
          onChangeText={onChangeTextHandlerEvent}
        />
        <IconButton
          icon="plus-circle"
          iconColor={MD3Colors.error70}
          style={styles.button}
          size={30}
          onPress={addItemToListHandlerEvent}
            /> 
        </View>
)}


const styles = StyleSheet.create({
  inputContainer: {
    width:"100%",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center"
  },
  containerTextInput:{
    width:"90%",
    borderRadius:10,
    paddingHorizontal:15,
    fontSize:15,
    backgroundColor:"#fff",
  },
  button:{
    backgroundColor:"#526D82"
  }
});

export default CustomInput