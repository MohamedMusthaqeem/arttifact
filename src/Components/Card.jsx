import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div
        className="border-2 border-black w-full bg-cover  bg-no-repeat rounded-lg m-2 "
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/018/880/039/non_2x/abstract-3d-modern-square-background-white-and-grey-geometric-pattern-texture-art-illustration-free-vector.jpg')`,
        }}
      >
        <div className="flex space-x-6">
          <h1 className=" flex text-2xl font-bold tracking-wide items-center justify-center border-r-2 border-black p-1 flex-col  text-blue-600">
            <img
              src={
                "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100221.jpg?size=626&ext=jpg&ga=GA1.1.1221402960.1727698227&semt=ais_hybrid"
              }
              alt=""
              className="rounded-full h-12 w-12 text-blue-600"
            />
            {data.name}
          </h1>
          <div className="p-2">
            <div>
              <div className="flex space-x-2 text-xl">
                <h1 className="text-xl font-semibold">Age :</h1>
                <p>{data.age}</p>
              </div>
              <div className="flex space-x-2 text-xl">
                <h1 className="text-xl font-semibold">Gender :</h1>
                <p>{data.gender}</p>
              </div>
              <div className="flex space-x-2 text-xl">
                <h1 className="text-xl font-semibold">Email :</h1>
                <p>{data.email}</p>
              </div>
              <div className="flex space-x-2 text-xl">
                <h1 className="text-xl font-semibold">Location :</h1>
                <p>{data.location}</p>
              </div>
            </div>
          </div>
          <div className="p-2 border-l border-gray-400">
            <div className="flex space-x-2 text-xl">
              <h1 className="text-xl font-semibold">Interest 1 :</h1>
              <p>{data.int1}</p>
            </div>
            <div className="flex space-x-2 text-xl">
              <h1 className="text-xl font-semibold">Interest 2 :</h1>
              <p>{data.int2}</p>
            </div>
            <div className="flex space-x-2 text-xl">
              <h1 className="text-xl font-semibold">Avatar :</h1>
              <p>{data.avatar}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
