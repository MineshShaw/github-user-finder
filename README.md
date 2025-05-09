# GitHub User Finder

A simple web application to search for GitHub users and display their profile details using the GitHub API.

## Features
- Search for GitHub users by username.
- Display user details such as avatar, name, bio, and repositories.
- User-friendly UI.

## Technologies Used
- React (Vite)
- Tailwind CSS
- GitHub API

## File Structure
```sh
github-user-finder/
│── public/
│── src/
│   ├── Components/
│   │   ├── ErrorMessage.jsx       // Displays errors
│   │   ├── Loader.jsx             // Loading state component
│   │   ├── SearchBar.jsx          // User input field
│   │   └── UserCard.jsx           // Displays user details
│   │
│   ├── Hooks/
│   │   └── useGitHubUser.js    // useEffect hook to fetch API data
│   │
│   ├── Pages/
│   │   └── Home.jsx            // Main page component
│   │
│   │
│   ├── Styles/
│   │   └── app.css             // Global styles
│   │
│   ├── App.jsx                 // Root component
│   └── main.jsx                // Entry point
│── .gitignore
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites
- Node.js and npm installed
- Internet connection

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/MineshShaw/github-user-finder
   ```
2. Navigate to the project directory:
   ```sh
   cd github-user-finder
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Enter a GitHub username in the search bar.
2. Click on the search button.
3. View the user's profile details.

## API Reference
- GitHub API: [https://docs.github.com](https://docs.github.com/en/rest?apiVersion=2022-11-28)

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## Author
[Minesh Shaw](https://github.com/MineshShaw)
