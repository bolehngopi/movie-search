"use client";

import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchApi = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://www.omdbapi.com/", {
        params: {
          apikey: process.env.NEXT_PUBLIC_API_KEY,
          s: search,
        },
      });
      setData(res?.data?.Search || []);
      setCurrentPage(1); // Reset to first page on new search
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchApi();
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <header className="bg-neutral py-4">
        <form
          className="max-w-3xl mx-auto flex items-center"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            name="search"
            placeholder="Search movie"
            className="input input-bordered w-full rounded-r-none focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn btn-primary rounded-l-none">
            Search
          </button>
        </form>
      </header>
      <main className="flex-1 container mx-auto px-4 my-10">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentItems.length === 0 ? (
                <div className="col-span-full text-center text-gray-500">
                  No data found
                </div>
              ) : (
                currentItems.map((movie: any) => (
                  <div
                    key={movie.imdbID}
                    className="card bg-base-100 shadow-xl"
                  >
                    <figure className="overflow-hidden">
                      <img
                        src={
                          movie.Poster === "N/A"
                            ? "https://via.placeholder.com/256x384"
                            : movie.Poster
                        }
                        alt={movie.Title}
                        className="object-cover w-full h-full"
                      />
                    </figure>
                    <div className="card-body">
                      <a
                        className="card-title link link-hover"
                        href={`https://www.imdb.com/title/${movie.imdbID}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {movie.Title}
                      </a>
                      <p className="text-gray-600 capitalize mt-2">
                        {movie.Type}
                      </p>
                      <p className="text-gray-600">{movie.Year}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            {/* Pagination */}
            {data.length > itemsPerPage && (
              <div className="flex justify-center mt-6 join">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`join-item btn ${
                      currentPage === index + 1 ? "" : "btn-active"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
        {data.length > 0 && !loading && (
          <div className="col-span-full text-center mt-5 text-gray-500">
            Total results: {data.length}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
