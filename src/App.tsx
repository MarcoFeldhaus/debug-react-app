import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    setData(users);
    setLoading(false);
  };

  useEffect(() => {
    if (data.length > 0) {
      (window as any).data = data;
      console.log("📦 window.data gesetzt:", data);
    }
  }, [data]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Debug Data mit DevTools</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={loadData}
      >
        Daten laden
      </button>

      {loading && <p className="mt-4">⏳ Lade Daten...</p>}

      {!loading && data.length > 0 && (
        <div className="overflow-auto mt-8">
          <table className="min-w-[800px] border border-gray-400 text-sm">
            <thead>
              <tr className="bg-gray-200">
                {Object.keys(data[0]).map((key) => (
                  <th key={key} className="px-4 py-2 border">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{user.id}</td>
                  <td className="px-4 py-2 border">{user.name}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
