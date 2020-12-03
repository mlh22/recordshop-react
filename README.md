RECORD SHOP - README SPECIFICATIONS

Welcome to React Retro Record shop - otherwise known as RR Record Shop. We have a wide (12) selection of
albums of all (3) different genres from a multitude (4) of decades. Our unique cart function keeps track not 
just of price, but also of the number of album copies and the number of songs you are purchasing. 

Now an essay going into code specifications...

The App.jsx component handles the rendering of all materials on the app. The App component holds the states and all functions 
that alter the states. More specifically, these functions pertain to adding to and removing from the cart aggregator.
For product list display, I declared a constant "recordslist" containing all albums in the shop. The App component passes this 
list to the FilteredList component.

FilteredList applies all methods of filtering to the product list. The prop "addToCart" was passed to this component so that 
users can add items to the aggregator from the list of products. FilteredList defines its own states pertaining to sort and 
filter methods. These methods are determined via assigning values to dropdown menu items to change the state in this component. 
After filtering is complete, FilteredList sends the addToCart method, information about the sort methods, and the filtered 
products list to SortedList. SortedList then sends the product list to the class Albums, which renders the list of albums as individual cards containing its information, price, and images.

The Cart receives a large multitude of properties from the App class. Firstly, the states that are changed in the App component 
are sent to the Cart component: the shopping list, the total price, and the total number of songs. Cart also receives the 
specific cart methods defined in App - removeFromCart, oneMoreAlbum, and oneLessAlbum. Cart essentially creates a div container 
to hold all of the cards pertaining to items in the shopping list. It renders the price and number of songs on its own, and 
sends the other properties to CartAlbum, which renders the list of cards as well as buttons to control adding and removing 
albums and copies of albums. The buttons have onClick actions which call the methods defined in the App component, and changes 
to the shopping list and album quantities are immediately reflected in the aggregation of price, albums, and songs.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
