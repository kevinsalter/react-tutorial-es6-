## React Tutorial (ES6+)

I'm wondering if it'd be useful to use a super-small app like this as a living styleguide that we can all comment on and contribute to while we hash out our team's internal standard way of writing React apps.

If you've got comments or ideas, pull this repo and add to it! :rocket:

This repo is a version of the [official React Tutorial](https://facebook.github.io/react/docs/tutorial.html).

-----

## Getting Started

`npm install` to install dependencies

then `npm start` to start the front-end and `npm run server` to start Node.js (for persisting comments to `comments.json`)

-----

### Some discussion points around writing [React Components](https://facebook.github.io/react/docs/reusable-components.html)

- [ ] `React.createClass` or `class xxxxxx extends React.Component` or both?
    - This SO question/answer is good --> http://stackoverflow.com/a/35058496
- [ ] should we aim for stateless components first?
- [ ] what are best practices for defining propTypes?
- [ ] how to use Container Components [article1](https://medium.com/@learnreact/container-components-c0e67432e005#.pero8m9gj) [article2](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.br1zdslap)

#### And in general...

- [ ] good ways to integrate with Backbone Models and Collections?
- [ ] how do we want our folder structure?
- [ ] how to we want to include CSS?
- [ ] how should Unit Tests look/work?
- [ ] how do we handle UI animation?
