import 'foundation-sites/scss/_global.scss';
import 'foundation-sites/scss/foundation.scss';
import '../style/global.scss';
import '../style/app.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from '../features/home';

angular.module('app', [uirouter, home])
  .config(routing);
