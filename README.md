# Movie Search Application

A movie search application built with Next.js, Tailwind CSS, and DaisyUI. This application allows users to search for movies using the [OMDb API](http://www.omdbapi.com/), displays results with pagination, and provides a clean and modern user interface.

## Features

- Search for movies by title using the [OMDb API](http://www.omdbapi.com/).
- Paginate results to display 8 movies per page.
- Responsive design optimized for both mobile and desktop views.
- Utilizes Tailwind CSS and DaisyUI for styling and component design.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **[DaisyUI](https://daisyui.com/)**: A component library for Tailwind CSS that provides pre-styled components.
- **Axios**: A promise-based HTTP client for making API requests.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Azizkhasyi11/movie-search.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd movie-search-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env.local` file in the root of the project and add your OMDb API key:

   ```env
   NEXT_PUBLIC_API_KEY=your_omdb_api_key
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Search for movies:**

   - Enter a movie title in the search input field and click the "Search" button.
   - The application will display search results with movie posters, titles, types, and release years.

2. **Navigate through pages:**
   - Use the pagination controls to navigate between pages of results.

## Contributing

If you want to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch (`git checkout -b feature/YourFeature`).**
3. **Make your changes and commit them (`git commit -am 'Add new feature'`).**
4. **Push to the branch (`git push origin feature/YourFeature`).**
5. **Create a new Pull Request.**
