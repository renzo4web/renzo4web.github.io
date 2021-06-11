import '../styles/index.scss';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

new App();
