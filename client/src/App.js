import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const initialData = [
    { title: "Aman", price: 20 },
    { title: "Kunal", price: 50 },
    { title: "Div", price: 260 },
    { title: "Pranal", price: 210 },
    { title: "Pravin", price: 70 },
    { title: "Vicky", price: 10 },
    { title: "Vicky", price: 20 },
    { title: "Vinayak", price: 200 },
  ];

  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (key) => {
    const newOrder = sortBy === key && sortOrder === "asc" ? "desc" : "asc";
    const newData = [...data].sort((a, b) => {
      if (key === "title") {
        return newOrder === "asc"
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      } else {
        return newOrder === "asc" ? a[key] - b[key] : b[key] - a[key];
      }
    });

    setData(newData);
    setSortBy(key);
    setSortOrder(newOrder);
  };

  return (
    <>
      <div className="App">
        <h1>Data Table</h1>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("title")}>Title</th>
              <th onClick={() => handleSort("price")}>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
