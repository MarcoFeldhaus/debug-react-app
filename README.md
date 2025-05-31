# Debug React App – README

Dieses Projekt zeigt, wie du Daten in einer React-App lädst und sie mit TailwindCSS darstellst. Außerdem kannst du über `window.data` bequem in der Browser-Konsole debuggen.

---

## 🚀 Starten

```bash
npm install
npm install -D @vitejs/plugin-react
npm run dev
```

Öffne dann `http://localhost:5173` im Browser.

Klicke auf **"Daten laden"**, um Userdaten aus dem öffentlichen API zu holen.

---

## 🕵️‍♂️ Debuggen in der Browser-Konsole

Nach dem Laden der Daten ist dein Array als globale Variable `data` verfügbar:

```js
data;
```

### 1. Daten inspizieren

- `data.length`  
  Zeigt die Anzahl der Datensätze

- `data[0]`  
  Erster Datensatz (Objekt)

- `console.table(data)`  
  Schöne tabellarische Übersicht der Daten

---

### 2. Daten filtern & transformieren

Du kannst Array-Methoden auf `data` ausführen, z.B.:

```js
// Alle User mit Email, die '.org' enthält
data.filter((user) => user.email.includes(".org"));

// Alle Usernamen ausgeben
data.map((user) => user.name);

// Usernamen in Großbuchstaben
data.map((user) => user.name.toUpperCase());
```

---

### 3. Einzelne Objekte inspizieren

Im DevTools-Log kannst du oft Objekte mit Klick öffnen. Falls du z.B. ein Objekt in der Konsole hast, kannst du es auch temporär speichern:

```js
const firstUser = data[0];
```

Oder kurz:

```js
$0;
```

(`$0` verweist oft auf das aktuell ausgewählte Element im Elements-Panel, sehr praktisch)

---

### 4. React-spezifisch debuggen

- **React Developer Tools** installieren (Chrome/Firefox Addon)  
  Damit kannst du die React-Komponenten-Hierarchie sehen und State/Props live inspizieren.

- **`console.log` in Komponenten** nutzen  
  Verwende z.B. `console.log(data)` im React-Hook, um bei jedem Datenupdate eine Ausgabe zu sehen.

- **`window` als globaler Speicher**  
  Im Beispiel setzen wir `window.data = data`, so sind die Daten auch außerhalb der Komponente verfügbar.

---

### 5. Schnelle Inline-Checks

Du kannst sogar kleine Funktionen in der Konsole schreiben, um z.B. zu zählen, wie viele User mit „Leanne“ im Namen sind:

```js
data.filter((u) => u.name.includes("Leanne")).length;
```

Oder dir alle Email-Adressen ausgeben lassen:

```js
data.map((u) => u.email).join(", ");
```

---

### 6. Breakpoints & Debugger

- Nutze die **Sources**- oder **Debugger**-Tab im Browser, um JS an bestimmten Stellen anzuhalten (`debugger`-Statement oder Breakpoints setzen)
- Damit kannst du den Laufzeitstatus und Variablen inspizieren

---

### 7. Weitere Tipps

- `console.dir(object)` gibt eine interaktive Liste aller Eigenschaften eines Objekts aus.
- `console.group()` und `console.groupEnd()` um Logs zu strukturieren.
- `console.time()` und `console.timeEnd()` um Laufzeiten zu messen.

---

## Zusammenfassung

Mit diesem Setup kannst du sehr flexibel:

- Daten live laden
- Über `window.data` einfach in der Konsole darauf zugreifen
- Daten mit JS-Funktionen analysieren, filtern, visualisieren
- React-Komponenten mit `console.log` debuggen
- Breakpoints setzen und React Developer Tools nutzen

---

Falls du Fragen hast oder mehr Debug-Features möchtest – einfach fragen!

---

# Viel Spaß beim Debuggen! 🔥
