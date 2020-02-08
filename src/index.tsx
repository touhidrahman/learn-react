import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import './index.css'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Routes />, document.getElementById('root'))

serviceWorker.unregister()
