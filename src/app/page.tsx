"use client";

import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchApi = async () => {
    const res = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        s: search,
      },
    });

    setData(res?.data?.Search || []);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchApi();
  };

  return (
    <>
      <form className="bg-gray-600 p-5 rounded-b" onSubmit={handleSearch}>
        <div className="flex items-center">
          <input
            type="text"
            name="search"
            placeholder="Search movie"
            className="w-full p-2 rounded-l border border-gray-300 focus:outline-none focus:border-blue-500 text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r border-l-0"
          >
            Search
          </button>
        </div>
      </form>
      <div className="container mx-auto px-4 my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No data found
            </div>
          ) : (
            data.map((Movie: any) => (
              <div
                key={Movie.imdbID}
                className="bg-white text-black p-4 shadow-md rounded-md overflow-hidden flex flex-col"
              >
                {/* {Movie.Poster !== "N/A" && ( */}
                <div className="card-img grow">
                  <img
                    src={
                      Movie.Poster === "N/A"
                        ? "https://via.placeholder.com/256x384"
                        : Movie.Poster
                    }
                    alt={Movie.Title}
                    className="w-64 h-96 object-cover rounded-md mb-2"
                  />
                  {/* )} */}
                  <a
                    className="text-xl font-bold underline"
                    href={`https://www.imdb.com/title/${Movie.imdbID}`}
                  >
                    {Movie.Title}
                  </a>
                </div>
                <div className="card-body">
                  <p className="text-gray-500 capitalize">{Movie.Type}</p>
                  <p className="text-gray-500">{Movie.Year}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
