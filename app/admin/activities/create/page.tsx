"use client";

import { useState } from "react";
import Link from "next/link";

interface ActivityForm {
  code: string;
  name: string;
  type: string;
  lesson: string;
  ageGroup: string;
  difficulty: string;
  instructions: string;
  status: string;
}

export default function CreateActivityPage() {
  const [form, setForm] = useState<ActivityForm>({
    code: "ACT-0004",
    name: "",
    type: "Matching",
    lesson: "",
    ageGroup: "",
    difficulty: "Easy",
    instructions: "",
    status: "Draft",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    console.log(form);
    alert("Activity Created Successfully");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Create Activity
          </h1>

          <p className="text-slate-500 mt-2">
            Create a reusable learning activity.
          </p>

        </div>

        <Link
          href="/admin/activities"
          className="border px-5 py-3 rounded-xl"
        >
          Back
        </Link>

      </div>

      <div className="bg-white rounded-2xl border p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <Input
            label="Activity Code"
            value={form.code}
            readOnly
          />

          <Select
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
            options={["Draft","Published"]}
          />

          <Input
            label="Activity Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <Select
            label="Activity Type"
            name="type"
            value={form.type}
            onChange={handleChange}
            options={[
              "Matching",
              "Drag & Drop",
              "Quiz",
              "Flash Card",
              "Tracing",
              "Puzzle",
              "Memory Game"
            ]}
          />

          <Select
            label="Lesson"
            name="lesson"
            value={form.lesson}
            onChange={handleChange}
            options={[
              "Colors Learning",
              "Shapes Learning",
              "Numbers Learning"
            ]}
          />

          <Select
            label="Age Group"
            name="ageGroup"
            value={form.ageGroup}
            onChange={handleChange}
            options={[
              "2-4 Years",
              "4-6 Years",
              "6-8 Years"
            ]}
          />

          <Select
            label="Difficulty"
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
            options={[
              "Easy",
              "Medium",
              "Hard"
            ]}
          />

        </div>

        <div className="mt-8">

          <label className="font-medium block mb-2">
            Instructions
          </label>

          <textarea
            rows={4}
            name="instructions"
            value={form.instructions}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

        </div>

        {/* Dynamic */}

        <div className="mt-10 rounded-xl border p-6 bg-slate-50">

          <h2 className="text-xl font-semibold mb-6">
            Activity Builder
          </h2>

          {form.type === "Matching" && (
            <div className="space-y-3">
              <Input label="Apple" placeholder="Red"/>
              <Input label="Banana" placeholder="Yellow"/>
              <Input label="Sky" placeholder="Blue"/>
            </div>
          )}

          {form.type === "Drag & Drop" && (
            <div className="grid md:grid-cols-2 gap-6">

              <textarea
                rows={6}
                placeholder="Left Items"
                className="border rounded-xl p-3"
              />

              <textarea
                rows={6}
                placeholder="Right Items"
                className="border rounded-xl p-3"
              />

            </div>
          )}

          {form.type === "Quiz" && (

            <div className="space-y-4">

              <Input label="Question"/>

              <Input label="Option A"/>

              <Input label="Option B"/>

              <Input label="Option C"/>

              <Input label="Option D"/>

            </div>

          )}

        </div>

        <div className="flex justify-end gap-4 mt-10">

          <Link
            href="/admin/activities"
            className="border px-6 py-3 rounded-xl"
          >
            Cancel
          </Link>

          <button
            onClick={submit}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl"
          >
            Create Activity
          </button>

        </div>

      </div>

    </div>
  );
}

function Input(props:any){
  return(
    <div>
      <label className="block mb-2 font-medium">
        {props.label}
      </label>

      <input
        {...props}
        className="w-full border rounded-xl p-3"
      />
    </div>
  )
}

function Select({label,options,...rest}:any){
  return(
    <div>

      <label className="block mb-2 font-medium">
        {label}
      </label>

      <select
        {...rest}
        className="w-full border rounded-xl p-3"
      >
        <option value="">
          Select
        </option>

        {options.map((item:string)=>(
          <option
            key={item}
          >
            {item}
          </option>
        ))}

      </select>

    </div>
  )
}