
"use client";

import { useState } from "react";

export default function CreateActivityPage() {
  const [items, setItems] = useState([
    { text: "Apple", zone: "Red" },
    { text: "Banana", zone: "Yellow" },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      {
        text: "",
        zone: "",
      },
    ]);
  };

  const updateItem = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...items];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setItems(updated);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Create Activity
        </h1>

        <p className="text-slate-500 mt-1">
          Build interactive learning activities.
        </p>
      </div>

      <div className="bg-white rounded-2xl border p-6 space-y-5">
        <div>
          <label className="block mb-2 font-medium">
            Activity Title
          </label>

          <input
            type="text"
            placeholder="Color Matching"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Lesson
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>Colors Learning</option>
            <option>Shapes Learning</option>
            <option>Animals Learning</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Age Group
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>2-4 Years</option>
            <option>4-6 Years</option>
            <option>6-8 Years</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Activity Type
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>Drag & Drop</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Question
          </label>

          <textarea
            rows={3}
            placeholder="Match Fruits With Colors"
            className="w-full border rounded-lg p-3"
          />
        </div>
      </div>

      {/* Builder */}

      <div className="bg-white rounded-2xl border p-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">
            Drag & Drop Builder
          </h2>

          <button
            onClick={addItem}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            + Add Item
          </button>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-4 border rounded-xl p-4"
            >
              <div>
                <label className="block mb-2 text-sm">
                  Draggable Item
                </label>

                <input
                  value={item.text}
                  onChange={(e) =>
                    updateItem(
                      index,
                      "text",
                      e.target.value
                    )
                  }
                  className="w-full border rounded-lg p-3"
                  placeholder="Apple"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Correct Zone
                </label>

                <input
                  value={item.zone}
                  onChange={(e) =>
                    updateItem(
                      index,
                      "zone",
                      e.target.value
                    )
                  }
                  className="w-full border rounded-lg p-3"
                  placeholder="Red"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview */}

      <div className="bg-white rounded-2xl border p-6">
        <h2 className="text-xl font-semibold mb-5">
          Preview
        </h2>

        <div className="flex flex-wrap gap-3 mb-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-blue-100 rounded-lg"
            >
              {item.text}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-6 py-4 border-2 border-dashed rounded-xl"
            >
              {item.zone}
            </div>
          ))}
        </div>
      </div>

      <button className="bg-green-600 text-white px-8 py-3 rounded-xl">
        Save Activity
      </button>
    </div>
  );
}

