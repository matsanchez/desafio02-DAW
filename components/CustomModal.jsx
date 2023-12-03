import { Modal, View, Text, Button, StyleSheet } from "react-native";

const CustomModal = ({
  animationTypeProp,
  isVisibleProp,
  itemSelectedProp,
  onDeleteItemHandlerEvent,
  setModalVisibleEvent,
}) => {
  return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp} transparent={true}>
      <View style={styles.modalView}>
        <View style={styles.modalText}>
          <Text>Se Eliminara:</Text>
          <Text>{itemSelectedProp.value}</Text>
        </View>
        <View style={styles.buttonsModalView}>
          <View style={styles.buttons}>
            <Button color="grey" title="Cancelar" onPress={() => setModalVisibleEvent(!isVisibleProp)} />
          </View>
          <View style={styles.buttons}>
            <Button color="red" title="Si, Eliminar" onPress={onDeleteItemHandlerEvent} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 15,
    alignItems: "center",
    backgroundColor: "#9DB2BF",
    borderRadius: 10,
    padding: 30,
    shadowColor: "#DDE6ED",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  modalText: {
    marginBottom: 25,
  },
  buttonsModalView: {
    flexDirection: "row",
  },
  buttons: {
    padding: 5,
  },
});

export default CustomModal;
