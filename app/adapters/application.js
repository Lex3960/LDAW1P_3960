import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';

export default ActiveModelAdapter.extend({
  host: config.host
  // host: 'https://still-garden-88285.herokuapp.com'
});
