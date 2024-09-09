import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SemesterFormScreen from "../screens/SemesterFormScreen";
import SemesterListScreen from "../screens/SemesterListScreen";
import { styles } from "../styles";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

const TabTopNavigator = ({
  semesters,
  addSemester,
  semesterCounter,
  addCourse,
  deleteCourse,
  deleteSemester,
  calculateCGPA,
  calculateGPA,
}) => {
  return (
    <>
    <Text style={styles.title}>CGPA Calculator</Text>
    
    
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "#005691",
        tabBarIndicatorStyle: {
          backgroundColor: "gold",
        },
        tabBarStyle: {
          backgroundColor: "#E8F1F5",
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="SemesterForm"
        options={{ title: "Add Semester/Course" }}
      >
        {() => (
          <SemesterFormScreen
            semesters={semesters}
            addSemester={addSemester}
            semesterCounter={semesterCounter}
            addCourse={addCourse}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="SemesterList"
        options={{ title: "View Semesters" }}
      >
        {() => (
          <SemesterListScreen
            semesters={semesters}
            deleteCourse={deleteCourse}
            deleteSemester={deleteSemester}
            calculateCGPA={calculateCGPA}
            calculateGPA={calculateGPA}
          />
        )}
      </Tab.Screen>

    </Tab.Navigator>
    </>
  );
};

export default TabTopNavigator;
