"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    schoolName: "FutureCubs",
    email: "admin@futurecubs.com",
    phone: "+91 9876543210",
    address: "Noida, Uttar Pradesh",
    timezone: "Asia/Kolkata",
    language: "English",
    cloudinary: "",
    googleMeet: "",
    zoom: "",
    emailNotification: true,
    smsNotification: false,
    parentNotification: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setSettings({
      ...settings,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };

  const handleSave = () => {
    console.log(settings);
    alert("Settings Saved Successfully");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your academy settings.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-8 space-y-10">

        {/* School */}

        <section>

          <h2 className="text-xl font-semibold mb-5">
            School Information
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <Input
              label="School Name"
              name="schoolName"
              value={settings.schoolName}
              onChange={handleChange}
            />

            <Input
              label="Email"
              name="email"
              value={settings.email}
              onChange={handleChange}
            />

            <Input
              label="Phone"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
            />

            <Input
              label="Address"
              name="address"
              value={settings.address}
              onChange={handleChange}
            />

            <Select
              label="Timezone"
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              options={[
                "Asia/Kolkata",
                "UTC",
                "Europe/London",
              ]}
            />

            <Select
              label="Language"
              name="language"
              value={settings.language}
              onChange={handleChange}
              options={[
                "English",
                "Hindi",
              ]}
            />

          </div>

        </section>

        {/* Branding */}

        <section>

          <h2 className="text-xl font-semibold mb-5">
            Branding
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <Input
              label="Logo"
              type="file"
            />

            <Input
              label="Favicon"
              type="file"
            />

          </div>

        </section>

        {/* Integrations */}

        <section>

          <h2 className="text-xl font-semibold mb-5">
            Integrations
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <Input
              label="Cloudinary"
              name="cloudinary"
              value={settings.cloudinary}
              onChange={handleChange}
            />

            <Input
              label="Google Meet"
              name="googleMeet"
              value={settings.googleMeet}
              onChange={handleChange}
            />

            <Input
              label="Zoom"
              name="zoom"
              value={settings.zoom}
              onChange={handleChange}
            />

          </div>

        </section>

        {/* Notifications */}

        <section>

          <h2 className="text-xl font-semibold mb-5">
            Notifications
          </h2>

          <div className="space-y-4">

            <Checkbox
              label="Email Notifications"
              name="emailNotification"
              checked={settings.emailNotification}
              onChange={handleChange}
            />

            <Checkbox
              label="SMS Notifications"
              name="smsNotification"
              checked={settings.smsNotification}
              onChange={handleChange}
            />

            <Checkbox
              label="Parent Notifications"
              name="parentNotification"
              checked={settings.parentNotification}
              onChange={handleChange}
            />

          </div>

        </section>

        <div className="flex justify-end">

          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
}

function Input(props: any) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {props.label}
      </label>

      <input
        {...props}
        className="w-full border rounded-xl p-3"
      />
    </div>
  );
}

function Select({
  label,
  options,
  ...rest
}: any) {
  return (
    <div>

      <label className="block mb-2 font-medium">
        {label}
      </label>

      <select
        {...rest}
        className="w-full border rounded-xl p-3"
      >
        {options.map((item: string) => (
          <option key={item}>
            {item}
          </option>
        ))}
      </select>

    </div>
  );
}

function Checkbox({
  label,
  ...rest
}: any) {
  return (
    <label className="flex items-center gap-3">
      <input
        type="checkbox"
        {...rest}
      />
      {label}
    </label>
  );
}