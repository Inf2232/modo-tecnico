import { useState } from "react";

export default function Contador() {
  const [n, setN] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setN(n + 1)}
      className="rounded bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-500"
    >
      Clics: {n}
    </button>
  );
}