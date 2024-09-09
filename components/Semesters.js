import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "../styles";
import { CourseList, CustomButton } from "./Courses";

export const SemesterForm = ({ onAddSemester, counter }) => {
  const [semesterName, setSemesterName] = useState("");

  const handleAddSemester = () => {
    const nameToUse = semesterName.trim()
      ? semesterName
      : `Semester ${counter}`;
    onAddSemester(nameToUse);
    setSemesterName("");
  };
  try {
    return (
      <View style={styles.section}>
        <Text style={styles.label}>Semester Name</Text>
        <View style={styles.inputButtonContainer}>
          <TextInput
            value={semesterName}
            onChangeText={(text) => setSemesterName(text)}
            style={styles.inputSmall}
          />
          <CustomButton
            title="Add"
            onPress={handleAddSemester}
            style={styles.addButtonSmall}
          />
        </View>
      </View>
    );
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const SemesterList = ({
  semesters,
  onDeleteCourse,
  onDeleteSemester,
  calculateGPA,
  calculateCGPA,
}) => {
  try {
    return (
      <>
        <FlatList
          style={styles.section}
          data={semesters}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.section}>
              <View style={styles.listItem}>
                <Text style={styles.header}>{item.name}</Text>
                <TouchableOpacity
                  style={styles.deletebtn}
                  onPress={() => onDeleteSemester(index)}
                >
                  <Text style={styles.deletebtntext}>Delete</Text>
                </TouchableOpacity>
              </View>
              <CourseList
                courses={item.courses}
                onDeleteCourse={(courseIndex) =>
                  onDeleteCourse(index, courseIndex)
                }
              />
              <Text style={styles.gpa}>
                GPA: {calculateGPA(item.courses).toFixed(2)}
              </Text>
            </View>
          )}
          ListFooterComponent={() => <View style={{ padding: 10 }}></View>}
        />
        <View>
          <Text style={styles.gpa}>CGPA: {calculateCGPA().toFixed(2)}</Text>
        </View>
      </>
    );
  } catch (err) {
    console.log(err);
    return null;
  }
};
