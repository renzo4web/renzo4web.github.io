import Navigo from 'navigo';
import { Projects } from './Pages/Projects';
import { Home } from './Pages/Home';
const router = new Navigo('/', { hash: true });

export class RouterHandler {
  constructor() {
    this.createRoutes();
  }

  createRoutes() {
    const routes = [
      { path: '/', page: Home },
      { path: '/work-gallery', page: Projects },
      { path: '/contact', page: Projects },
      { path: '/top', page: () => '' },
    ];

    routes.forEach(({ path, page }) => router.on(path, page).resolve());
  }
}
