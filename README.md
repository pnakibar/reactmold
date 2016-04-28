# Materious
## Buzzword Certified Admin UI

### Technologies Used:
* [Material-UI](https://github.com/callemall/material-ui)
* [Webpack](https://webpack.github.io/)
* [Flexbox](http://flexboxgrid.com/)
* [react-flexbox-grid](http://roylee0704.github.io/react-flexbox-grid/)
* [Babel](https://babeljs.io/)
* [Material Icons](https://design.google.com/icons/) (general)
* [Fonts Awesome](http://fortawesome.github.io/Font-Awesome/) (only some services)

### How to use this
The components are in the _./app_ directory.
To run it in your own environment, for **testing** purposes, run:

```bash
  npm start
```

This command will launch webpack-dev-server, with hot-reload server, which is specified in _package.json_, in the section _scripts_.

#### Building
To build the project, simply install all its dependencies and run:

```bash
  npm run build
```

The generated code is spitted into the _./build_ directory.


### Roadmap
- [ ] Login/Signup component
- [ ] User management screen (add users, delete, change password)
- [ ] __React-Router__
- [ ] Finish de dashboards container components
- [ ] Get the left-navbar right
- [ ] Make chart components using _d3_ and/or _c3_
- [ ] Finish some Dashboards samples
- [ ] Custom chart components
- [ ] UI for generating components

### Side-Roadmap
- [ ] Tests
- [ ] CI
- [ ] Badges
