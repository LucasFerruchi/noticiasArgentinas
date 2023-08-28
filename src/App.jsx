import { useEffect, useState } from "react";
import { getNewsArg } from "./helpers/newsApi.js";
import imgNotFound from "./assets/img/imgNotFound.png";
import "./css/home.css";

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
              <div className="d-flex justify-content-center align-items-center">
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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
          {/* <div className="card" style="width: 18rem;">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div> */}
          {news.map((newArg, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img
                  src={newArg.urlToImage ? newArg.urlToImage : imgNotFound}
                  className="card-img-top img-card"
                  alt={newArg.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{newArg.title}</h5>
                  <p className="card-text">{newArg.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    href={newArg.url}
                    className="btn btn-outline-primary"
                    target="_blank"
                  >
                    Ver más!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
