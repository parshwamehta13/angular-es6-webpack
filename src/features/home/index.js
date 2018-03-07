import 'foundation-sites/scss/_global.scss';
import 'foundation-sites/scss/foundation.scss';
import './styles/home.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './controllers/home.controller';
import StatusPillWrapperController from './controllers/statusPillWrapper.controller';

export default angular.module('app.home', [])
  .config(routing)
  .controller('HomeController', HomeController)
  .controller('StatusPillWrapperController', StatusPillWrapperController)
  .name;
