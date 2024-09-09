import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  LogBox,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../styles";
export const creditHrs = {
    2: 2,
    3: 3,
    4: 4,
  };

 export const gradePoints = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    "D-": 0.7,
  };
export const CustomButton = ({ title, onPress, style }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.customButton, style]}>
          <Text style={styles.customButtonText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
export const CourseForm = ({ onAddCourse, counter }) => {
    const [courseInfo, setCourseInfo] = useState({
      courseName: "",
      creditHours: "2",
      grade: "A+",
    });
  
    const handleInputChange = (name, value) => {
      setCourseInfo({
        ...courseInfo,
        [name]: value,
      });
    };
  
    const handleAddCourse = () => {
      const { courseName, creditHours, grade } = courseInfo;
      let nameToUse = courseName;
  
      if (!courseName.trim()) {
        nameToUse = `course${counter}`;
      }
  
      if (parseInt(creditHours) > 0 && grade) {
        const newCourse = {
          courseName: nameToUse,
          creditHours: parseInt(creditHours),
          grade,
        };
  
        onAddCourse(newCourse);
        setCourseInfo({
          courseName: "",
          creditHours: "2",
          grade: "A+",
        });
      } else {
        alert("Please enter valid course details.");
      }
    };
    try{
    return (
      <View style={styles.section}>
        <Text style={styles.label}>Course</Text>
        <TextInput
          value={courseInfo.courseName}
          onChangeText={(text) => handleInputChange("courseName", text)}
          style={styles.input}
        />
  
        <Text style={styles.label}>Credits</Text>
        <Picker
          selectedValue={courseInfo.creditHours}
          onValueChange={(itemValue) => handleInputChange("creditHours", itemValue)}
          style={styles.picker}
        >
          {Object.keys(creditHrs).map((key) => (
            <Picker.Item label={key} value={key} key={key} />
          ))}
        </Picker>

        <Text style={styles.label}>Grade</Text>
        <Picker
          selectedValue={courseInfo.grade}
          onValueChange={(itemValue) => handleInputChange("grade", itemValue)}
          style={styles.picker}
        >
          {Object.keys(gradePoints).map((key) => (
            <Picker.Item label={key} value={key} key={key} />
          ))}
        </Picker>
  
        <CustomButton
          title="Add Course"
          onPress={handleAddCourse}
          style={[
            styles.addButton,
            courseInfo.courseName &&
            parseFloat(courseInfo.creditHours) > 0 &&
            courseInfo.grade
              ? styles.addButtonHover
              : null,
          ]}
        />
      </View>
    );
} catch (err) {
    console.log(err);
    return null;
  }
  };
  
  
  
  export const CourseList = ({ courses, onDeleteCourse }) => {
    try{
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={courses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.listItem}>
              <Text>{item.courseName}</Text>
              <Text>{item.creditHours}</Text>
              <Text>{item.grade}</Text>
              <TouchableOpacity
                style={styles.deletebtn}
                onPress={() => onDeleteCourse(index)}
              >
                <Text style={styles.deletebtntext}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
} catch (err) {
    console.log(err);
    return null;
  }
  };