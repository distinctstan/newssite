import image from '../assets/news.jpg'

const NewsItem = ({ article }) => {
  return (
    <div
      className="card bg-dark text-light d-inline-block m-3 p-2"
      style={{ maxWidth: "348px"}}
    >
      <img
        style={{ height: "200px", width: "100%" }}
        src={article.urlToImage?article.urlToImage:image}
        className="card-img-top"
        alt="News"
      />
      <div className="card-body">
        <h5 className="card-title">{article.title.slice(0, 50)}</h5>
        <p className="card-text">
          {article.description
            ? article.description.slice(0, 90)
            : "News info, This is about what have just happened."}
        </p>
        <a href={article.url} target='_blank' className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
