import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BooksProvider as Provider } from './context/books'
import './index.css'

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider>
        <App />
    </Provider>
);
