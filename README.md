# Galactic Archives

Galactic Archives is a Star Wars information hub that provides detailed information about the Star Wars universe using data from the Star Wars API. The project is built with React and utilizes various modern web development technologies to create an engaging and dynamic user experience.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Component Structure](#component-structure)
- [Development Report](#development-report)
- [Future Plans](#future-plans)
- [Acknowledgements](#acknowledgements)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Galactic Archives is a solo project developed by [Your Name]. The application provides detailed information about various Star Wars entities, such as characters, planets, and starships, using data from the Star Wars API (`https://swapi-api.alx-tools.com/`).

## Features

- **Responsive Design**: Built with Tailwind CSS for a fully responsive layout.
- **Dynamic Routing**: Utilizes React Router for seamless navigation.
- **Data Fetching**: Uses Axios for efficient data fetching and error handling.
- **Search Functionality**: Allows users to search for specific characters and species.
- **Reusable Components**: Designed with reusable components for easy maintenance and scalability.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Headless UI**: Accessible and unstyled UI components tailored for Tailwind CSS.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: A library for routing in React applications.
- **Heroicons**: A set of free, MIT-licensed high-quality SVG icons.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/galactic-archives.git
    ```
2. Navigate to the project directory:
    ```sh
    cd galactic-archives
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm start
    ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the application.
- Use the navigation menu to explore different sections of the Star Wars universe.
- Search for specific characters or species using the search functionality.

## Component Structure

- **App Component**: The root component where routing is configured.
- **Pages**:
  - **Home**: Displays an overview and a search bar.
  - **Details Pages**: Fetches and displays detailed information about specific Star Wars entities.
- **UI Components**:
  - **Header**: Contains the main navigation menu and branding elements.
  - **Footer**: Provides additional information and links.
  - **Card**: Displays various Star Wars entities.
  - **Disclosure and Tabs**: Organizes content and enhances user experience.
  - **EntityDetails**: Shows detailed data about a particular entity.
  - **ImageSlider**: Carousel for showcasing images.
  - **SearchPeople and SearchSpecies**: Provides search functionality for specific characters or species.

## Development Report

### Key Successes
- Learned and implemented Tailwind CSS and React Router.
- Created a React app independently without guides.
- Designed reusable components like EntityDetails.

### Challenges
- Managed a tight schedule and worked solo.
- Faced issues with multiple component re-renders.
- Limited API data to the first page, needing pagination.

### Areas for Improvement
- Address multiple component re-renders.
- Implement pagination for full data display.
- Enhance the styling for a more professional look.

## Future Plans

- Fix component re-render issues.
- Add pagination for comprehensive data display.
- Improve dynamic routing for better navigation.
- Enhance user interaction and visual design.

## Acknowledgements

I would like to thank the following people for their contributions to this project:

- [Film picture] - Photo by <a href="https://unsplash.com/@sushioutlaw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brian McGowan</a> on <a href="https://unsplash.com/photos/white-robot-toy-on-black-background-ggg_B1MeqQk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.
- [Straship picture] - Photo by <a href="https://unsplash.com/@sushioutlaw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brian McGowan</a> on <a href="https://unsplash.com/photos/blue-and-yellow-plane-flying-over-rocky-mountain-during-daytime-3bETLGHcAUU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.
- [Species picture] - Photo by <a href="https://unsplash.com/@sushioutlaw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brian McGowan</a> on <a href="https://unsplash.com/photos/man-in-gray-and-black-mask-SE5mmOZWqHE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.
- [Vehicles picture] - Photo by <a href="https://unsplash.com/@rodlong?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rod Long</a> on <a href="https://unsplash.com/photos/brown-and-blue-metal-frame-AcYH9GKvVlo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.
- [People picture] - Photo by <a href="https://unsplash.com/@tex450?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Matthew Ball</a> on <a href="https://unsplash.com/photos/woman-in-black-hoodie-holding-pen-SbEqbKIHaaQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.
- [Planet picture] - Photo by <a href="https://unsplash.com/@boliviainteligente?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">BoliviaInteligente</a> on <a href="https://unsplash.com/photos/a-painted-egg-sitting-on-top-of-a-black-surface-qiGFmxOAFlk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
  
  