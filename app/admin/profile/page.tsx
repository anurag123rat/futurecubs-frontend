"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    firstName: "Anurag",
    lastName: "Yadav",
    email: "admin@futurecubs.com",
    phone: "+91 9876543210",
    dob: "1998-01-10",
    address: "Noida, Uttar Pradesh",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = () => {
    console.log(profile);
    alert("Profile Updated Successfully");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="text-slate-500 mt-2">
          Manage your account information.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-8">

        <div className="flex flex-col items-center">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-32 h-32 rounded-full"
          />

          <button className="mt-4 border px-5 py-2 rounded-xl">
            Change Photo
          </button>

        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <Input
            label="First Name"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
          />

          <Input
            label="Last Name"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />

          <Input
            label="Date of Birth"
            type="date"
            name="dob"
            value={profile.dob}
            onChange={handleChange}
          />

          <Input
            label="Address"
            name="address"
            value={profile.address}
            onChange={handleChange}
          />

        </div>

        <hr className="my-8"/>

        <h2 className="text-xl font-semibold mb-5">
          Change Password
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <Input
            type="password"
            label="Current Password"
            name="currentPassword"
            value={profile.currentPassword}
            onChange={handleChange}
          />

          <Input
            type="password"
            label="New Password"
            name="newPassword"
            value={profile.newPassword}
            onChange={handleChange}
          />

          <Input
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            value={profile.confirmPassword}
            onChange={handleChange}
          />

        </div>

        <div className="flex justify-end mt-8">

          <button
            onClick={updateProfile}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            Update Profile
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