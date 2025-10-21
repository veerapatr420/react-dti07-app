import React, { useState, useEffect } from "react";
import Dtiheader from "./Dtiheader";

export default function Dtipage02() {
  const [title, setTitle] = useState("");
  const [fullname, setFullName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [showWelcome, setShowWelcome] = useState("");

  const handleWelcomeClick = () => {
    if (title == "" || fullname == "" || faculty == "") {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน!!!");
      return;
    }
    setShowWelcome(`สวัสดีคุณ ${title} ${fullname} คณะ ${faculty}`);
  };

  // ✅ เพิ่ม useEffect แสดงผลอัตโนมัติเมื่อชื่อหรือคณะเปลี่ยน
  useEffect(() => {
    if (title !== "" && fullname !== "" && faculty !== "") {
      setShowWelcome(`สวัสดีคุณ ${title} ${fullname} คณะ ${faculty}`);
    } else {
      setShowWelcome("");
    }
  }, [title, fullname, faculty]);

  return (
    <div>
      <Dtiheader title="Dti PAGE B" detail="HELLO" />
      <div className="mt-10 text-center text-blue-600 text-2xl font-bold">
        การจัดการ State กับ Form
      </div>
      <div className="mt-10 w-8/12 border-2 border-gray-200 mx-auto p-8 shadow-lg rounded-xl flex flex-col">
        {/* input ต่าง ๆ ไม่เปลี่ยน */}
        <label>คำนำหน้า</label>
        <div className="flex gap-2 mt-2 mb-5">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="radio"
            name="dtititle"
            value="นาย"
          />{" "}
          นาย
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="radio"
            name="dtititle"
            value="นาง"
          />{" "}
          นาง
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="radio"
            name="dtititle"
            value="นางสาว"
          />{" "}
          นางสาว
        </div>
        <label>ป้อนชื่อ</label>
        <input
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          className="border border-gray-400 p-2 mt-2 mb-5 rounded"
        />
        <label>คณะ</label>
        <select
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          className="border border-gray-400 p-2 mt-2 mb-5 rounded"
        >
          <option value="">กรุณาเลือกคณะ</option>
          <option value="ศิลปศาสตร์และวิทยาศาสตร์">
            ศิลปศาสตร์และวิทยาศาสตร์
          </option>
          <option value="บริหารธุรกิจ">บริหารธุรกิจ</option>
          <option value="วิศวกรรมศาสตร์">วิศวกรรมศาสตร์</option>
          <option value="นิติศาสตร์">นิติศาสตร์</option>
        </select>

        <button
          onClick={handleWelcomeClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          WELCOME
        </button>

        <h1 className="text-center font-bold text-3xl text-red-500 mt-10 ">
          {showWelcome}
        </h1>
      </div>
    </div>
  );
}
