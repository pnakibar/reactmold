import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const app = () => <p>Hello World!</p>

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const AuxApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <App />
  </MuiThemeProvider>

)

ReactDOM.render(
  <AuxApp />,
  document.getElementById('app')
)
