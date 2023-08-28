import { useEffect, useState } from "react";
import { getNewsArg } from "./assets/helpers/newsApi.js";
import "./App.css";

function App() {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const newsNow = await getNewsArg();
    console.log(newsNow);
    const { articles } = newsNow;
    console.log(articles);
    setNews(articles);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Noticias Argentinas</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <div>
                <h3>Buscar noticias</h3>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  {/* <option selected>Categorías</option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option> */}
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
