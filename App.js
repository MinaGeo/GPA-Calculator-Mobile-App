import React, { useEffect, useState } from "react";
import {
  View,
  LogBox,
} from "react-native";
import { styles } from "./styles";
import {gradePoints, creditHrs } from "./components/Courses";
import TabTopNavigator from "./navigations/TabTopNavigator";
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
  const [semesters, setSemesters] = useState([]);
  const [semesterCounter, setSemesterCounter] = useState(1);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    LogBox.ignoreAllLogs();
  }, []);

  const addSemester = (name) => {
    setSemesters([...semesters, { name, courses: [] }]);
    setSemesterCounter(semesterCounter + 1);
  };

  const addCourse = (semesterIndex, newCourse) => {
    const updatedSemesters = semesters.map((semester, index) =>
      index === semesterIndex
        ? { ...semester, courses: [...semester.courses, newCourse] }
        : semester
    );
    setSemesters(updatedSemesters);
  };

  const deleteCourse = (semesterIndex, courseIndex) => {
    const updatedSemesters = semesters.map((semester, index) =>
      index === semesterIndex
        ? {
            ...semester,
            courses: semester.courses.filter((course, i) => i !== courseIndex),
          }
        : semester
    );
    setSemesters(updatedSemesters);
  };
  const calculateGPA = (courses) => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    courses.forEach((course) => {
      totalGradePoints += gradePoints[course.grade] * course.creditHours;
      totalCreditHours += course.creditHours;
    });

    return totalCreditHours === 0 ? 0 : totalGradePoints / totalCreditHours;
  };
  const deleteSemester = (semesterIndex) => {
    const updatedSemesters = semesters.filter(
      (semester, index) => index !== semesterIndex
    );
    setSemesters(updatedSemesters);
  };

  const calculateCGPA = () => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    semesters.forEach((semester) => {
      semester.courses.forEach((course) => {
        totalGradePoints += gradePoints[course.grade] * course.creditHours;
        totalCreditHours += course.creditHours;
      });
    });

    return totalCreditHours === 0 ? 0 : totalGradePoints / totalCreditHours;
  };

  try {
    return (
      <NavigationContainer>
      <View style={styles.container}>
        <TabTopNavigator
          semesters={semesters}
          addSemester={addSemester}
          semesterCounter={semesterCounter}
          addCourse={addCourse}
          deleteCourse={deleteCourse}
          deleteSemester={deleteSemester}
          calculateCGPA={calculateCGPA}
          calculateGPA={calculateGPA}
        />
    </View>
    </NavigationContainer>
    );
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default App;
