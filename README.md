# Rick and Morty

## Objective

The goal on this project is to consume the [Rick and Morty API](https://rickandmortyapi.com/) to display the characteres, be able to select one of the characters displaying the information of it along with the avatar, and display a Recommended list of characters based on the selected character species.

## Setup

After cloning the repository you have to run `yarn` for the installation of the dependencies.

## Start

The project can be started by running `yarn start`

## Test

The test can be started by runnning `yarn test`

## Decisions made

For a quick setup of the project I decided to go for the boilerplate recommended by `Facebook`, [`create-react-app`](https://create-react-app.dev/) - I think that is a good way to have a project up and running without having to stay busy with the webpack configuration (Typescript, babel, etc.).

To manage the state of the application I based the comunication of cross-app data trough the [React Context API](https://reactjs.org/docs/context.html) and [React Hooks](https://reactjs.org/docs/hooks-intro.html) because side effects weren't needed to have this working that worth the use of state managers such as Redux or Mobx

Because of this [API](https://rickandmortyapi.com) provides a pagination ready to use I implemented an infinite scrolling using a new concept to me - the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). I found it really useful and can be easily use trough a custom hooks.
