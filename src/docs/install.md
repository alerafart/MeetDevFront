# Install project Meet Dev React

- clone the project
https://github.com/O-clock-apollo/projet-10-meet-dev-front

- install dependencies
``` console
 > yarn
```
- install additional library if not install with yarn:
``` console
> yarn add react-motion react-icons
```

- to start the project: (needs deployed back to login)
```
yarn start
```

# Deploy project

1. delete build directory if already existing
2. Create a build
``` console
> yarn build
```
3. Copy what the build directory contains to your server or pvn

# Various

In the public forlder there is a .htaccess. You can configure it according to your server configuration.
For the moment it il configured to return all routes to index.html so that React-router-dom is fonctional (including for the 404 page).

