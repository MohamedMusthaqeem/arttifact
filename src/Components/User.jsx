import axios from "axios";
import React, { useState, useEffect } from "react";

const User = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [int1, setInt1] = useState("");
  const [int2, setInt2] = useState("");
  const [displayname, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const storedData = JSON.parse(localStorage.getItem("formDataArray")) || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      age,
      gender,
      location,
      int1,
      int2,
      displayname,
      email,
      avatar,
    };
    const updateData = [...storedData, data];
    localStorage.setItem("formDataArray", JSON.stringify(updateData));
    setAge("");
    setAvatar("");
    setGender("");
    setDisplayName("");
    setEmail("");
    setInt1("");
    setInt2("");
    setLocation("");
    setName("");
  };
  const fetchLoc = async () => {
    const loc = await axios
      .get(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=9eb8df714ebe431aa26be310f4ae8e57"
      )
      .catch((e) => {
        console.log(e);
      });
    console.log(loc);
    setLocation(loc.data.city);
  };
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover  bg-no-repeat "
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-vector/decorative-line-white-background_189483-27.jpg?size=626&ext=jpg&ga=GA1.1.1221402960.1727698227&semt=ais_hybrid')`,
        }}
      >
        <div className="">
          <form action="" className="space-y-5 m-6">
            <h1 className="text-2xl font-bold">Personal Information</h1>
            <div className="space-x-2 flex flex-col w-1/4">
              <label className="text-lg font-medium">Name</label>
              <input
                type="text"
                className="border-2 border-black px-2 py-1 rounded-sm"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="space-x-2 flex flex-col w-1/4">
              <label className="text-lg font-medium">Age</label>
              <input
                type="Number"
                className="border-2 border-black px-2 py-1 rounded-sm"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div className="space-x-2 flex flex-col w-1/4">
              <label className="text-lg font-medium">Gender</label>
              <select
                name=""
                id=""
                className="border-2 border-black px-2 py-1 rounded-sm"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="space-x-2 flex flex-col w-1/4">
              <label className="text-lg font-medium">Location</label>
              <input
                type="text"
                className="border-2 border-black px-2 py-1 rounded-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="space-x-2 flex flex-col w-1/4">
              <label className="text-lg font-medium">Interest1</label>
              <input
                type="text"
                className="border-2 border-black px-2 py-1 rounded-sm"
                value={int1}
                onChange={(e) => setInt1(e.target.value)}
              />
            </div>
            <div className="space-x-2 flex flex-col w-1/4">
              <label className="text-lg font-medium">Interest2</label>
              <input
                type="text"
                className="border-2 border-black px-2 py-1 rounded-sm"
                value={int2}
                onChange={(e) => setInt2(e.target.value)}
              />
            </div>
          </form>
          {/* {Email} */}
          <form className="space-y-5 m-6">
            <h1 className="text-2xl font-bold">Additional Information</h1>
            <div className="space-x-2 flex flex-col w-1/4">
              <label className="text-lg font-medium">Display Name</label>
              <input
                type="text"
                className="border-2 border-black px-2 py-1 rounded-sm"
                value={displayname}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div className="space-x-2 flex flex-col w-1/4">
              <label className="text-lg font-medium">Email</label>
              <input
                type="text"
                className="border-2 border-black px-2 py-1 rounded-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-x-2 flex flex-col w-1/4">
              <label className="text-lg font-medium">Avatar Name</label>
              <input
                type="text"
                className="border-2 border-black px-2 py-1 rounded-sm"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </div>
          </form>
          <button
            className="py-2 my-3 bg-blue-600 text-white w-1/4 mx-6 rounded-md"
            onClick={fetchLoc}
          >
            Fetch Location
          </button>
          <button
            className="py-2 my-3 bg-blue-600 text-white w-1/4 mx-6 rounded-md"
            onClick={handleSubmit}
          >
            ADD USER
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default User;
