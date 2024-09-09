import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 20,
        backgroundColor: "#FAFAFA",  // Background color
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#005691",  // Title color
        margin: 10,
    },
    section: {
        marginBottom: 16,
        backgroundColor: "#E8F1F5",  // Section background color
        padding: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#005691",  // Border color
        shadowColor: "#000",  // Shadow color
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: "#004A7C",  // Label text color
    },
    input: {
        borderColor: "#005691",  // Input border color
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
        fontSize: 16,
        color: "#004A7C",  // Input text color
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#005691",  // Header text color
    },
    list: {
        maxHeight: 200,
    },
    listHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#005691",  // List header border color
        marginBottom: 10,
        paddingBottom: 10,
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#005691",  // List item border color
        marginBottom: 8,
        paddingBottom: 8,
    },
    gpa: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center",
        color: "#005691",  // GPA text color
    },
    addButton: {
        padding: 9.5,
        backgroundColor: "#005691",  // Add button background color
        color: "#FAFAFA",  // Add button text color
        borderWidth: 1,
        borderColor: "#005691",  // Add button border color
        borderRadius: 4,
        fontWeight: "bold",
        transition: "0.5s all",
        textAlign: "center",
    },
    addButtonHover: {
        color: "#FAFAFA",
        backgroundColor: "#004A7C",  // Hover background color for button
        borderColor: "#004A7C",  // Hover border color for button
        borderWidth: 1,
    },
    deletebtn: {
        padding: 9.5,
        color: "#FAFAFA",  // Delete button text color
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#005691",  // Delete button background color
        borderRadius: 15,
    },
    deletebtntext: {
        color: "#FAFAFA",  // Delete button text color
    },
    picker: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#005691",  // Picker border color
        borderRadius: 4,
        color: "#004A7C",  // Picker text color
        paddingRight: 30,
    },
      // Your existing styles
  inputButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputSmall: {
    width: "70%", // Decreased size
    padding: 8,
    borderColor: "#005691",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10, // Space between input and button
  },
  addButtonSmall: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    backgroundColor: "#005691",
    borderRadius: 5,
    marginLeft: 20,
    color: "white",
  },
  breakline: {
    height: 1,
    backgroundColor: "#ccc", // Light gray color for the breakline
    marginVertical: 10, // Space around the breakline
  },
});

export { styles };
