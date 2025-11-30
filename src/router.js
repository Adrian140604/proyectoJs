import {Home} from './components/Home';
import {Animals} from './components/Animals';
import {Login} from './components/Login';
import { About } from './components/About';

const router= async ()=>{
    const view = document.getElementById('view');
    const route = location.hash.slice(1).toLowerCase() || '/';
    const parts= route.split("/");
    
    const routes = {
        '/': Home,
        '/animals': Animals,
        '/login':Login,
    };
    if(parts[1]==="about"){
        const id=parts[2];
        view.innerHTML= await About(id);
        return;
    }
    const screen = routes[route] || NotFound;
    view.innerHTML = await screen();
}

export {router}