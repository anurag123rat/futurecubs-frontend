import Link from "next/link";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Baby,
  ShieldCheck,
} from "lucide-react";

export default function ParentDetailsPage() {
  const parent = {
    id: 1,
    parentId: "EP-0001",

    fatherName: "Rahul Sharma",
    motherName: "Priya Sharma",
    guardian: "-",

    phone: "+91 9876543210",
    email: "rahul@gmail.com",

    occupation: "Software Engineer",

    address:
      "Sector 56, Gurgaon, Haryana",

    emergency: "+91 9999999999",

    canPickup: "Yes",

    status: "Active",

    student: {
      name: "Aarav Sharma",
      code: "EC-0001",
      age: "2 Years 4 Months",
      ageGroup: "2-4 Years",
      progress: 82,
      lesson: "Colors Learning",
      teacher: "Priya Sharma",
    },
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">

        <div className="flex items-center gap-5">

          <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-4xl font-bold">
            {parent.fatherName.charAt(0)}
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              {parent.fatherName}
            </h1>

            <p className="text-slate-500 mt-1">
              Parent ID : {parent.parentId}
            </p>

            <span className="inline-block mt-3 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
              {parent.status}
            </span>

          </div>

        </div>

        <Link
          href={`/admin/parents/${parent.id}/edit`}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
        >
          Edit Parent
        </Link>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">

        <Card
          icon={<Baby size={22} />}
          title="Linked Student"
          value={parent.student.name}
        />

        <Card
          icon={<User size={22} />}
          title="Teacher"
          value={parent.student.teacher}
        />

        <Card
          icon={<ShieldCheck size={22} />}
          title="Pickup Permission"
          value={parent.canPickup}
        />

        <Card
          icon={<Briefcase size={22} />}
          title="Occupation"
          value={parent.occupation}
        />

      </div>

      {/* Information */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Parent */}

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="text-xl font-semibold mb-5">
            Parent Information
          </h2>

          <Info
            label="Parent ID"
            value={parent.parentId}
          />

          <Info
            label="Father"
            value={parent.fatherName}
          />

          <Info
            label="Mother"
            value={parent.motherName}
          />

          <Info
            label="Guardian"
            value={parent.guardian}
          />

          <Info
            label="Occupation"
            value={parent.occupation}
          />

        </div>

        {/* Contact */}

        <div className="bg-white rounded-2xl border p-6">

          <h2 className="text-xl font-semibold mb-5">
            Contact Information
          </h2>

          <Info
            label="Phone"
            value={parent.phone}
          />

          <Info
            label="Email"
            value={parent.email}
          />

          <Info
            label="Emergency"
            value={parent.emergency}
          />

          <Info
            label="Address"
            value={parent.address}
          />

        </div>

      </div>

      {/* Linked Student */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-5">
          Linked Student
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

          <StudentCard
            title="Student"
            value={parent.student.name}
          />

          <StudentCard
            title="Student Code"
            value={parent.student.code}
          />

          <StudentCard
            title="Age"
            value={parent.student.age}
          />

          <StudentCard
            title="Age Group"
            value={parent.student.ageGroup}
          />

          <StudentCard
            title="Current Lesson"
            value={parent.student.lesson}
          />

          <StudentCard
            title="Progress"
            value={`${parent.student.progress}%`}
          />

        </div>

      </div>

      {/* Progress */}

      <div className="bg-white rounded-2xl border p-6">

        <h2 className="text-xl font-semibold mb-6">
          Child Progress
        </h2>

        <div className="h-4 bg-slate-200 rounded-full">

          <div
            className="h-4 rounded-full bg-green-500"
            style={{
              width: `${parent.student.progress}%`,
            }}
          />

        </div>

        <p className="mt-4 font-semibold">
          {parent.student.progress}% Completed
        </p>

      </div>

    </div>
  );
}

function Card({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl border p-5">

      <div className="text-blue-600">
        {icon}
      </div>

      <p className="text-slate-500 mt-3">
        {title}
      </p>

      <h3 className="font-bold mt-2">
        {value}
      </h3>

    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between border-b py-3">

      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium text-right">
        {value}
      </span>

    </div>
  );
}

function StudentCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border rounded-xl p-5">

      <p className="text-slate-500 text-sm">
        {title}
      </p>

      <h3 className="font-semibold mt-2">
        {value}
      </h3>

    </div>
  );
}