# react-native-apollo-todo

This is a basic todo app built using React Native. The app uses Hasura for its backend, leveraging the following features of Hasura:

- Hasura Database
- GraphQL queries provided by Hasura
- Apollo Client
- [React Native Auth Boilerplate](https://github.com/hasura/react-native-auth-boilerplate) for authentication.

# Pre-requisites

- Ensure that you have the [HasuraCLI](https://docs.hasura.io/0.15/manual/install-hasura-cli.html) installed on your local machine.
- Login into Hasura by running the following command on your command shell

```bash
hasura login
```

# Quickstart

## Getting the project

To get the project, run the following in your command shell:

```bash
hasura quickstart hasura/react-native-apollo-todo
```

## Running the app

1. Add your cluster name to `react-native-app/Hasura.js`. (Run `hasura cluster status` from the root directory to get your cluster name).

```javascript
const clusterName = "comrade45" //Replace "comrade45" with your cluster name
```

2. `git push` the project to `hasura` remote to push the local configurations, migrations and deployments to the cluster.

```bash
$ git add .
$ git commit -m "First commit"
$ git push hasura master
```

3. `cd` into the `react-native-app` directory and install the required node modules.

```
$ cd react-native-app
$ npm install
```

4. Run the app

```
$ npm start
```

5. On running the above command, a QR code will be generated in the terminal. Scan it from the Expo app on your phone to try out the app.

>This app is built using Create React Native App. If you do not wish to use Expo for development, just run `npm run eject` from the `react-native-app` directory and you will get the app in the form of a raw `react-native` project.


# React Native App Code

The source code for the Todo App lies in the react-native-app directory.

The root component for the `Todo App` is `src/AppScreen.js`.

# Exploring Hasura Features

To explore the Hasura features and learn how to use them, checkout our 20 minute `hello-react` guide [here](https://hasura.io/hub/projects/hasura/hello-react).
