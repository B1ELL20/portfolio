import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes.jsx'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {

  gtmId: 'GTM-TGQ9BKGT'
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
