import { useEffect, useState } from "react";
import Image from "./components/Image";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("");
  const getImage = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    const data = await response.json();
    setData(data);
    setImage(data);
  };
  useEffect(() => {
    getImage();
  }, []);
  const searchTitle = (e) => {
    const match = data.filter((item) => {
      return item.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setImage(match);
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <h2 className="searchTitle">Search Card Name</h2>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={searchTitle}
          className="input"
          placeholder="Search"
        />
      </div>
      {image.length > 0 ? <Image data={image} /> : "No image found"}
      <div>
        <footer className="footer">
          <p>
            <strong>
              &copy; {new Date().getFullYear()} -{" "}
              <span>All Rights Reserved</span>
            </strong>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
