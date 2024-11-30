import { ReactElement } from "react";

export interface ExerciseDetailHOCProps {
  exerciseNumber: number;
  problemStatement: string;
  testCases: ReactElement[];
}
