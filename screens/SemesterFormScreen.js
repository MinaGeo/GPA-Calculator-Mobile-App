import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";
import { SemesterForm } from "../components/Semesters";
import { CourseForm } from "../components/Courses";

const SemesterFormScreen = ({ semesters, addSemester, semesterCounter, addCourse }) => {
  const renderSemester = ({ item, index }) => (
    <View key={index} style={styles.section}>
      <Text style={styles.label}>{item.name}</Text>
      <CourseForm
        onAddCourse={(newCourse) => addCourse(index, newCourse)}
        counter={item.courses.length + 1}
      />
    </View>
  );

  try {
    return (
      <>
        <SemesterForm onAddSemester={addSemester} counter={semesterCounter} />
        {semesters.length > 0 && (
          <FlatList
            data={semesters}
            renderItem={renderSemester}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </>
    );
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default SemesterFormScreen;
