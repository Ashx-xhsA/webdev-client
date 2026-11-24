"use client";
import { useState } from "react";

const SYMBOLS: Record<string, string> = {
  add: "+", subtract: "-", multiply: "×", divide: "÷",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async (op: string) => {
    const response = await fetch(
      `/api/lab5/calculator?a=${a}&b=${b}&operation=${op}`
    );
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setResult("");
      return;
    }
    setError("");
    setResult(`${data.a} ${SYMBOLS[data.operation]} ${data.b} = ${data.result}`);
  };

  return (
    <div id="wd-calculator">
      <h3>Calculator (Next.js Web API)</h3>
      <label className="block mb-2">
        A:{" "}
        <input className="border rounded px-2 py-1" type="number" value={a}
          onChange={(e) => setA(e.target.value)} />
      </label>
      <label className="block mb-2">
        B:{" "}
        <input className="border rounded px-2 py-1" type="number" value={b}
          onChange={(e) => setB(e.target.value)} />
      </label>
      <label className="block mb-2">
        Operation:{" "}
        <select className="border rounded px-2 py-1" value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
            calculate(e.target.value);
          }}>
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">×</option>
          <option value="divide">÷</option>
        </select>
      </label>
      <button type="button" className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white mb-2"
        onClick={() => calculate(operation)}>
        Calculate
      </button>
      <input className="border rounded px-2 py-1 block" readOnly value={result} />
      {error && (
        <p className="rounded bg-red-100 px-3 py-2 text-red-800 mt-2">{error}</p>
      )}
      <hr className="my-4" />
    </div>
  );
}