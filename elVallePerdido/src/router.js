import {Home} from './components/Home';
import {Animals} from './components/Animals';
import {Login} from './components/Login';
import { About } from './components/About';

const router= async ()=>{
    const view = document.getElementById('view');
    const route = location.hash.slice(1).toLowerCase() || '/';
    const routes = {
        '/': Home,
        '/animals': Animals,
        '/login':Login,
        '/About':About

    };
    const screen = routes[route] || NotFound;
    view.innerHTML = await screen();
}

export {router}