"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input className="border rounded px-2 py-1 mr-2" type="number"
        value={a} onChange={(e) => setA(e.target.value)} />
      <input className="border rounded px-2 py-1" type="number"
        value={b} onChange={(e) => setB(e.target.value)} />
      <div className="flex gap-2 mt-2">
        <a id="wd-query-parameter-add" className="bg-blue-600 text-white rounded px-3 py-1"
          href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
          Add {a} + {b}
        </a>
        <br/>
        <a id="wd-query-parameter-subtract" className="bg-blue-600 text-white rounded px-3 py-1"
          href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
          Subtract {a} - {b}
        </a>
        <br/>
        <a id="wd-query-parameter-multiply" className="bg-blue-600 text-white rounded px-3 py-1"
          href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
          Multiply {a} × {b}
        </a>
        <br/>
        <a id="wd-query-parameter-divide" className="bg-blue-600 text-white rounded px-3 py-1"
          href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
          Divide {a} ÷ {b}
        </a>
      </div>
      <hr className="my-4" />
    </div>
  );
}