import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import directives from '../../directives/statusPill';

export default angular.module('app.home', [uirouter, directives])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
