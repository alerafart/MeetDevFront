# General Structure

## presentation

- Our structure is based on create-react-app.  
- We used eslint configuring it with b&b syntax.  
- In public folder we have a ".htaccess" config to redirect all routes on index.html to allow react-router-dom to work.  
- in src folder we have:
  
  - actions folder for all our actions and actions creator
  - assets folder which contains all the images we need (avatar, icons, background)
  - components, middlewares and reducers folder for of course all our components, middlewares and reducers
  - store folder where the configuration of our redux-store is located. All our middlewares are also imported here in the store.
  - styles folder which contains a css reset, a file for our variables and our index.scss
  - Finally the entry point of our application: index.js which. It contains the import of our router (react-router-dom) as well as the import of our store (redux-store)



