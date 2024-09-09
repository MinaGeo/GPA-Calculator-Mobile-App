import React from "react";
import { SemesterList } from "../components/Semesters";

 const SemesterListScreen = ({ semesters, deleteCourse, deleteSemester, calculateCGPA, calculateGPA }) => {
  try{
  return (
    <>
      <SemesterList
        semesters={semesters}
        onDeleteCourse={deleteCourse}
        onDeleteSemester={deleteSemester}
        calculateCGPA={calculateCGPA}
        calculateGPA={calculateGPA}
      />
    </>
  );
} catch (err) {
  console.log(err);
  return null;
} 
};

export default SemesterListScreen;
