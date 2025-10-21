import React, { useEffect, useState } from "react";
import Dtiheader from "./Dtiheader";

export default function Dtipage01() {
  const [money, setMoney] = useState("");
  const [people, setPeople] = useState("");
  const [moneyShare, setMoneyShare] = useState("0.00");

  // ฟังก์ชันลบ comma ออกจาก string
  const removeCommas = (str) => str.replace(/,/g, "");

  // ฟังก์ชัน format ใส่ comma
  const formatNumber = (numStr) => {
    if (!numStr) return "";
    const parts = numStr.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  // คำนวณหาร
  const CalMoneyShare = () => {
    if (money === "" || people === "") {
      setMoneyShare("0.00");
      return;
    }
    if (parseFloat(money) <= 0 || parseFloat(people) <= 0) {
      setMoneyShare("0.00");
      return;
    }
    let moneyInput = parseFloat(money);
    let peopleInput = parseFloat(people);
    let result = moneyInput / peopleInput;
    setMoneyShare(result.toFixed(2));
  };

  // เรียกใช้ทุกครั้งที่ money หรือ people เปลี่ยน
  useEffect(() => {
    CalMoneyShare();
  }, [money, people]);

  const handleCalMoneyShareClick = () => {
    if (money === "" || people === "") {
      alert("กรุณาป้อนจํานวนเงินและจํานวนคน");
      return;
    }
    if (parseFloat(money) <= 0 || parseFloat(people) <= 0) {
      alert("กรุณาป้อนจํานวนเงินและจํานวนคนมากกว่า 0");
      return;
    }
    CalMoneyShare();
  };

  // เมื่อเปลี่ยน input money
  const handleMoneyChange = (e) => {
    const value = e.target.value;

    const numericValue = removeCommas(value);

    // ตรวจสอบว่าเป็นตัวเลข หรือเว้นไว้ถ้าลบหมด
    if (numericValue === "" || /^\d*\.?\d*$/.test(numericValue)) {
      setMoney(numericValue);
    }
  };

  return (
    <>
      <Dtiheader title="Dti PAGE A" detail="HELLO" />

      <div className="mt-10 text-center text-blue-600 font-bold">
        Money Share V.1.0
      </div>

      <div className="mt-10 w-8/12 border-gray-300 mx-auto p-8 shadow-lg rounded-xl flex flex-col">
        <label> ป้อนเงิน</label>
        <input
          value={formatNumber(money)}
          placeholder="0.00"
          onChange={handleMoneyChange}
          type="text" // เปลี่ยนจาก number เป็น text เพื่อให้ใส่ comma ได้
          className="border border-gray-200 p-2 mt-2 mb-5 rounded"
        />
        <label> ป้อนคน</label>
        <input
          value={people}
          placeholder="0"
          onChange={(e) => setPeople(e.target.value)}
          type="number"
          className="border border-gray-200 p-2 mt-2 mb-5 rounded"
        />
        <button
          onClick={handleCalMoneyShareClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          คำนวณ
        </button>
        <div className="text-center mt-5">
          หารกันคนละ
          <span className="mx-5 text-2xl text-red-600 font-bold">{formatNumber(moneyShare)}</span>
          บาท
        </div>
      </div>
    </>
  );
}
