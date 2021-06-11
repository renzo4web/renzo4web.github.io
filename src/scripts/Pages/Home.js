import { view } from '../utils/view';
import { HomePage } from '../components/Home';
export const Home = () => {
  document.title = 'Home | Renzo';

  view.innerHTML = `${HomePage()}`;
};
