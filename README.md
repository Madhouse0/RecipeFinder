# Cooking Recipe Finder

A modern React web app that helps you find possible dishes based on the ingredients you have. This app uses a local `full_format_recipes.json` file as its recipe database, so no API key is needed.

- Select ingredients from a visual list
- See possible dishes you can make
- Click a recipe to view full details (ingredients, instructions, etc.) in a popup modal
- Add and remove ingredients dynamically
- Enjoy a smooth, animated user experience

## Features
- **Ingredient Selection:** Choose ingredients and see matching dishes in real time.
- **Minimal Recipe List:** The main page shows only recipe titles (and images if available) for a clean overview.
- **Full Details on Click:** Click a recipe to view all details (ingredients, instructions, etc.) in a modal popup.
- **Dynamic UI:** Selected ingredients are shown as chips and removed from the available list until deselected.
- **Responsive Design:** Works well on desktop and mobile.

## Getting Started

### Prerequisites
- Node.js (v14 or newer recommended)
- npm or yarn

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/cooking-recipe-finder.git
   cd cooking-recipe-finder
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Ensure the `src/full_format_recipes.json` file is present. This file contains all recipe data used by the app.

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

## Usage
- Select ingredients from the list.
- View possible dishes under "Possible Dishes".
- Click a dish card to view recipe details in a popup.
- Remove ingredients by clicking the × on a chip.

## Environment Variables
- `REACT_APP_SPOONACULAR_API_KEY` – Your Spoonacular API key.

## Tech Stack
- React
- CSS (custom, no frameworks)
- Spoonacular API

## Credits
- Spoonacular for the recipe data and API.
- [Create React App](https://github.com/facebook/create-react-app) for the project setup.

## License
This project is for educational/demo purposes. Check API provider terms for commercial use.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
