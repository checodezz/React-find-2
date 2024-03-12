import "./App.css";

//1. Given an array of objects, write a React component to find and display all the movie details of "Movie 2".

const Movies = ({ movies, movieName }) => {
  const movieDetails = movies.find((movie) => movie.title === movieName);

  return (
    <div>
      <h2>Movie Details</h2>
      <p>{movieDetails.title}</p>
      <p>Genre: {movieDetails.genre}</p>
    </div>
  );
};

//2. Given an array of objects, write a React component to find and display all the details of "Cafe 2".

const Cafes = ({ cafes, cafeName }) => {
  const cafeDetails = cafes.find((cafe) => cafe.name === cafeName);

  return (
    <div>
      <h2>Cafe Details</h2>
      <p>{cafeDetails.name}</p>
      <p>Location: {cafeDetails.location}</p>
      <p>Rating: {cafeDetails.rating}</p>
    </div>
  );
};

//3. Given an array of objects, write a React component to find and display all the details of "Podcast 3".

const Podcast = ({ podcasts, podcastName }) => {
  const podcastDetails = podcasts.find(
    (podcast) => podcast.title === podcastName,
  );
  return (
    <div>
      <h2>Podcast Details</h2>
      <p>{podcastDetails.title}</p>
      <p>{podcastDetails.host}</p>
      <p>{podcastDetails.listeners}</p>
    </div>
  );
};

//4. Given an array of objects, write a React component to find and display all the details of "Book 1".

const Books = ({ books, bookName }) => {
  const bookDetails = books.find((book) => book.title === bookName);

  return (
    <div>
      <h2>Book Details </h2>
      <p>Title: {bookDetails.title}</p>
      <p>Author: {bookDetails.author}</p>
      <p>Pages: {bookDetails.pages}</p>
    </div>
  );
};

//5. Given an array of objects, write a React component to find and display all the details of "Article 2".

const Articles = ({ articles, articleName }) => {
  const articleDetails = articles.find(
    (article) => article.title === articleName,
  );

  return (
    <div>
      <h2>Article Details</h2>
      <p>{articleDetails.title}</p>
      <p>Author: {articleDetails.author}</p>
      <p>Category: {articleDetails.category}</p>
    </div>
  );
};

//6. Given an array of objects, write a React component to find and display all the blog details of category "Food".

const Blog = ({blogPosts, category}) => {
  const blogDetails = blogPosts.find(blog => blog.category === category);
  return (
    <div>
    <h2>Blog Details</h2>
      <p>{blogDetails.title}</p>
      <p>Content: {blogDetails.content}</p>
      <p>Category: {blogDetails.category}</p>
    </div>
  )
}

export default function App() {
  const movies = [
    { title: "Movie 1", director: "Director 1", genre: "Action" },
    { title: "Movie 2", director: "Director 2", genre: "Comedy" },
    { title: "Movie 3", director: "Director 3", genre: "Drama" },
  ];

  const cafes = [
    { name: "Cafe 1", location: "Location 1", rating: 4.5 },
    { name: "Cafe 2", location: "Location 2", rating: 4.2 },
    { name: "Cafe 3", location: "Location 3", rating: 4.8 },
  ];

  const podcasts = [
    { title: "Podcast 1", host: "Host 1", listeners: 5000 },
    { title: "Podcast 2", host: "Host 2", listeners: 3000 },
    { title: "Podcast 3", host: "Host 3", listeners: 7000 },
  ];

  const books = [
    { title: "Book 1", author: "Author 1", pages: 300 },
    { title: "Book 2", author: "Author 2", pages: 250 },
    { title: "Book 3", author: "Author 3", pages: 400 },
  ];

  const articles = [
    { title: "Article 1", author: "Author 1", category: "Technology" },
    { title: "Article 2", author: "Author 2", category: "Food" },
    { title: "Article 3", author: "Author 3", category: "Fashion" },
  ];

  const blogPosts = [
    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },
    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },
    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Technology' }
  ];

  return (
    <main>
      <Movies movies={movies} movieName="Movie 2" />
      <hr />
      <Cafes cafes={cafes} cafeName="Cafe 2" />
      <hr />
      <Podcast podcasts={podcasts} podcastName="Podcast 3" />
      <hr />
      <Books books={books} bookName="Book 1" />
      <hr />
      <Articles articles={articles} articleName="Article 2" />
      <hr/>
      <Blog blogPosts={blogPosts} category="Food"/>
    </main>
  );
}
