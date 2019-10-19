const ReactGA = require('react-ga')

ReactGA.initialize('UA-63104269-2')
ReactGA.set({
  appName: 'Career Progression at ENSEK'
})

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}
