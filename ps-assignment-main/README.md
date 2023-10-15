# Star Wars Favorites

This React application fetches movies from the Star Wars API (SWAPI) and lets users mark their favorite movies. The goal of this task is to debug the application, improve the styling, and potentially add enhancements.

## Table of Contents

- [Star Wars Favorites](#star-wars-favorites)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installing](#installing)
  - [SWAPI Documentation](#swapi-documentation)
  - [Tasks](#tasks)

## Getting Started

These instructions will help you set up the project locally on your machine.

### Installing

1. Unzip the project.

2. Navigate to the project directory:

   ```bash
   cd star-wars-favorites
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on [http://localhost:3000/](http://localhost:3000/).

## SWAPI Documentation

- **Base URL:** `https://swapi.dev/api/`
- **Relevant Endpoints:**
  - **Films:** `/films/`
    - **Method:** `GET`
    - **Description:** Fetches all the Star Wars films.

For a more in-depth look at the API, please refer to the [official SWAPI documentation](https://swapi.dev/documentation).

Please notice the the SWAPI API might take some time to respond

## Tasks

1. **Debugging:** - Start the application and identify the 2 errors introduced. - Dive into the codebase and pinpoint the source of each error. - Rectify each error ensuring the application displays and functions correctly. - Offer a concise explanation of the root causes and detail your solutions.
   problem number 1:
   the movie was not passed properly by movieItems
   this is the solution: Just add movie as a parameter sent to onMovieSelect:
   onClick={() => onMovieSelect(movie)}
   problem number 2:
   the function prop was not passed to moviedetails properly.
   this is the solution to the problem:
   <MovieDetails movie={selectedMovie} favorites={favorites} onFavoriteToggle={handleFavorite}/>
   additional problems:
   mockup did not have buttton
   images were not in the html
   star/heart did not appear in html/js
   I also added a component to change numbers to the roman number.
2. **Styling:**

   - Refactor the application's styling to match the provided [mockup](page_mockup.png)
   - Ensure the design is responsive and maintains consistency across various screen sizes and browsers.

3. **Improvements:** (Optional)

   - After implementation of the basic design, you can go ahead and implement any other enhancements or features you feel would optimize the application.
     The things i changed:
     adding black gradient instead of white blur in movieitems
     adding black gradient above background image in moviedetails
     font family
     changing star to be filled in

4. **Upload to github:**
   - Once finished, upload the project to github.
   - Try to clone your code and run it - make sure all works after cloning
   - Make sure the site works as expected
