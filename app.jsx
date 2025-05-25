import React from 'react';
import ReactDOM from 'react-dom/client';
import useSWR from 'swr'; // Import useSWR from swr package

const root = ReactDOM.createRoot(document.body);
// Created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const {
    data: name,
    url
  } = useSWR('https://pokeapi.co/v2/1', fetcher);
}

  // Handles error and loading state
  //if (error) return <div className='failed'>failed to load</div>;
  //if (isValidating) return <div className="Loading">Loading...</div>;

root.render(<App />);

function App() {
  return (
      
      <div className="banana">
        <h1 style={{color: "white"}}>Pokedex</h1>
      </div>

  )
}