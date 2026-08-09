export interface Teacher {
  id: number;
  teacherCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: "Male" | "Female";
  qualification: string;
  experience: number;
  ageGroup: string;
  joiningDate: string;
  status: "Active" | "Inactive";
  totalStudents: number;
  totalClasses: number;
  avatar: string;
}