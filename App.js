import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import CustomModal from "./components/CustomModal";
import CustomInput from "./components/CustomInput";
import CustomFlatList from "./components/CustomFlatList";
import { IconButton, MD3Colors } from "react-native-paper";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const onChangeTextHandler = (text_task) => {
    setTextItem(text_task);
  };

  const addItemToListHandler = () => {
    if (textItem === "") {
      console.log("Ingrese Tarea");
    }
    setItemList((prevItemList) => [
      ...prevItemList,
      { id: Math.random().toString(), value: textItem, completed: false },
    ]);
    setTextItem("");
  };

  const onSelectItemHandler = (id) => {
    setModalVisible(!modalVisible);
    setItemSelected(itemList.find((item) => item.id === id));
  };

  const onDelectItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelected.id));
    setModalVisible(!modalVisible);
  };

  const renderItemList = ({ item }) => {
    return (
      <View style={styles.taskView}>
        <Text>{item.value}</Text>
        <IconButton
          style={styles.button}
          icon="trash-can"
          iconColor={MD3Colors.error50}
          onPress={() => onSelectItemHandler(item.id)}
        />
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <CustomFlatList itemListProp={itemList} renderItemListProp={renderItemList} itemProp />
        <CustomInput
          placeholderProp="Ingresa la Tarea"
          textItemProp={textItem}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToListHandlerEvent={addItemToListHandler}
        />
      </View>
      <CustomModal
        animationTypeProp="slide"
        isVisibleProp={modalVisible}
        itemSelectedProp={itemSelected}
        onDeleteItemHandlerEvent={onDelectItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27374D",
    padding: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  taskView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  button: {
    margin: -10,
  },
});
