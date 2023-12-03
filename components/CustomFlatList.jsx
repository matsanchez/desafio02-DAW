import { FlatList, StyleSheet, Text } from "react-native";

const CustomFlatList = ({ itemListProp, renderItemListProp, itemProp }) => {
  return (
    <FlatList
      data={itemListProp}
      renderItem={renderItemListProp}
      keyExtractor={(itemProp) => itemProp.id}
      ListHeaderComponent={() => <Text style={styles.title}>Lista de Tareas</Text>}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 21,
    marginBottom: 10,
    backgroundColor: "white",
  },
  title: {
    marginBottom: 15,
    fontWeight: "700",
    letterSpacing: 0.5,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#9DB2BF",
    padding: 5,
    borderRadius: 10,
  },
});

export default CustomFlatList;
