import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { router } from './router';

document.querySelector('#app').innerHTML = `
  ${Navbar()}
    <main id="view"></main>
  ${Footer()}
`;
router();
window.addEventListener('hashchange', router);

