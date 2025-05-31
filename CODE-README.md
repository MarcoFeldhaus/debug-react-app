# React Debugging mit Browser Developer Tools

Dieses README erklärt dir Zeile für Zeile eine Beispiel-React-Komponente (`App.tsx`) mit Datenladen und Debugging-Möglichkeiten.

---

## Import React Hooks

```tsx
import { useEffect, useState } from "react";
```

- `useState`: Zum lokalen State (Zustand) in der Komponente.
- `useEffect`: Für Nebenwirkungen, z.B. Daten laden beim Komponentenstart.

---

## TypeScript Typ

```ts
type User = {
  id: number;
  name: string;
  email: string;
};
```

- Definiert den Typ `User` mit 3 Eigenschaften.
- TypeScript weiß so, wie User-Objekte aussehen.

---

## Hauptkomponente

```tsx
function App() {
```

- Beginn der React-Komponente als Funktion.

---

## State Definitionen

```tsx
const [data, setData] = useState<User[]>([]);
const [loading, setLoading] = useState(false);
```

- `data` speichert ein Array von Usern, initial leer.
- `loading` merkt sich, ob gerade Daten geladen werden.

---

## Daten laden (async Funktion)

```tsx
const loadData = async () => {
  setLoading(true);
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  setData(users);
  setLoading(false);
};
```

- Setzt `loading` auf `true`.
- Ruft eine öffentliche API ab.
- Speichert die User-Daten im State.
- Setzt `loading` wieder auf `false`.

---

## Daten global verfügbar machen

```tsx
useEffect(() => {
  if (data.length > 0) {
    (window as any).data = data;
    console.log("📦 window.data gesetzt:", data);
  }
}, [data]);
```

- Wenn `data` geladen ist, wird es auf `window.data` abgelegt.
- So kannst du in der Browser-Konsole einfach `data` eintippen und die Daten sehen.

---

## JSX Rendern

```tsx
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
```

- Button lädt die Daten.
- Anzeige eines Ladehinweises während des Ladens.
- Danach Tabelle mit User-Daten.
- Tabellenkopf dynamisch aus Schlüsseln des ersten Users.
- Tabellenkörper mit allen User-Daten.
- Styling mit TailwindCSS.

---

## Datei Export

```tsx
export default App;
```

- Exportiert die Komponente für den Import in `main.tsx` oder andere Dateien.

---

## Debuggen in der Browser-Konsole

Nach dem Laden der Daten ist dein Array als globale Variable `data` verfügbar:

```js
data;
```

Du kannst z.B. so Daten in der Konsole untersuchen:

```js
data.map((user) => user.name);
```

Oder einzelne Objekte anschauen:

```js
console.log(data[0]);
```

---

# Zusammenfassung

- `console.log` hilft dir, Werte während der Ausführung zu prüfen.
- `window.data` macht Daten global zugänglich in DevTools.
- `useEffect` ist ideal, um Aktionen bei Datenänderungen auszuführen.
- Dynamisches Rendern mit `map` erzeugt Tabellen, Listen etc.
- Ladezustände zeigen Nutzer:innen an, dass etwas passiert.

---

Viel Erfolg beim Debuggen! 🎉
