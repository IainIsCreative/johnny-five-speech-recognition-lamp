# Voice Activated Lamp with Johnny-Five

An example of HTML5 Speech Recognition used to control a lamp using Socket.io and Johnny-Five.

## Why Speech Recognition and Robots?

This was merely a small experiment of making a small lamp with Johnny-Five but also using speech recognition for control. With this, we can have a web app using Speech Recognition for commands that are then sent to our server, which will then check and change the robot's state, the robot being our lamp.

It's also worth noting **this is just a prototype project.** It's nothing production ready and was made for fun, but also for practicing JS stacks, organisation, and tests.

## How do I make this lamp?

Don't worry — you can find instructions and a circuit here for making the circuit for the lamp. Included in the file are a list of components and also a detailed guide for first-timers.

## Installation

Clone this repository and then use `npm` or `yarn` to install the project's dependencies. In this README, I will be using Yarn (as it's super powerful) but any commands here can be used with `npm` as well. Your choice.

```
yarn install
```

## Running the project

To run the project *as is*, then simply run the `build` command and then run `start` to get the project going.

```
yarn build
yarn start
```

### Running the project under Development

If you wish to use this for development purposes and even extend it, it's best to use `dev-start` and `dev-server`. `dev-start` is to run Nodemon to watch our files and update on the fly while running a web server. `dev-start` initiates a Webpack Server to watch for changes on the client files and update them.

```
yarn dev-start
yarn dev-server
```

## All Commands

- `dev-start` : Starts the Express Server and uses Nodemon to watch for changes
- `dev-server` : Begins a Webpack Development Server to rebundle your scripts.
- `build` : Compile all the code for production.
- `start` : Start the production copy of the server
- `test` : Check and test the JS functionality and code
