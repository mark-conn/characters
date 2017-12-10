import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { cartoonCharacters, headerList } from './data';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App characters={cartoonCharacters} headerList={headerList} />, document.getElementById('root'));
registerServiceWorker();
