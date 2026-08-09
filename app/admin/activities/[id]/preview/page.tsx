"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Eye,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

export default function ActivityPreviewPage() {
  const [answers, setAnswers] = useState({
    apple: "",
    banana: "",
    sky: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const resetPreview = () => {
    setAnswers({
      apple: "",
      banana: "",
      sky: "",
    });

    setSubmitted(false);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Eye className="text-blue-600" />
            Activity Preview
          </h1>

          <p className="text-slate-500 mt-2">
            Preview exactly what students will see.
          </p>

        </div>

        <Link
          href="/admin/activities"
          className="border rounded-xl px-5 py-3 hover:bg-slate-100"
        >
          Back
        </Link>

      </div>

      {/* Info */}

      <div className="grid md:grid-cols-4 gap-5">

        <Card title="Activity">
          Color Matching
        </Card>

        <Card title="Type">
          Matching
        </Card>

        <Card title="Age Group">
          2-4 Years
        </Card>

        <Card title="Difficulty">
          Easy
        </Card>

      </div>

      {/* Preview */}

      <div className="bg-white border rounded-2xl p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Match every object with its colour
        </h2>

        <p className="text-slate-500 mt-2">
          This preview behaves like the real activity.
        </p>

        <div className="space-y-6 mt-8">

          {/* Apple */}

          <Question
            label="🍎 Apple"
            value={answers.apple}
            onChange={(value) =>
              setAnswers({
                ...answers,
                apple: value,
              })
            }
          />

          {/* Banana */}

          <Question
            label="🍌 Banana"
            value={answers.banana}
            onChange={(value) =>
              setAnswers({
                ...answers,
                banana: value,
              })
            }
          />

          {/* Sky */}

          <Question
            label="☁️ Sky"
            value={answers.sky}
            onChange={(value) =>
              setAnswers({
                ...answers,
                sky: value,
              })
            }
          />

        </div>

        {/* Result */}

        {submitted && (

          <div className="mt-8 rounded-xl bg-green-100 text-green-700 p-5 flex items-center gap-3">

            <CheckCircle2 />

            <span>
              Preview Submitted Successfully
            </span>

          </div>

        )}

        {/* Buttons */}

        <div className="flex justify-end gap-4 mt-10">

          <button
            onClick={resetPreview}
            className="border px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-slate-100"
          >
            <RotateCcw size={18} />

            Reset
          </button>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            Submit Preview
          </button>

        </div>

      </div>

      {/* Notes */}

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">

        <h3 className="font-semibold text-blue-700 mb-2">
          Admin Notes
        </h3>

        <ul className="list-disc ml-5 text-slate-600 space-y-2">
          <li>Check question order.</li>
          <li>Verify correct answers.</li>
          <li>Ensure images/audio are loading.</li>
          <li>Confirm activity works before publishing.</li>
        </ul>

      </div>

    </div>
  );
}

function Question({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>

      <label className="block mb-2 font-medium">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-xl p-3"
      >
        <option value="">
          Select Colour
        </option>

        <option value="Red">
          Red
        </option>

        <option value="Yellow">
          Yellow
        </option>

        <option value="Blue">
          Blue
        </option>

        <option value="Green">
          Green
        </option>

      </select>

    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border rounded-2xl p-5">

      <p className="text-slate-500 text-sm">
        {title}
      </p>

      <h3 className="text-lg font-semibold mt-2">
        {children}
      </h3>

    </div>
  );
}