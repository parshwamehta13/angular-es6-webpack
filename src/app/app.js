import 'foundation-sites/scss/_global.scss';
import 'foundation-sites/scss/foundation.scss';
import '../style/global.scss';
import '../style/app.scss';
import '../style/angular-tooltips.min.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularTooltip from 'angular-tooltips';
import jsonFormatter from 'jsonformatter';

import routing from './app.config';
import home from '../features/home';

angular.module('app', [uirouter, home, angularTooltip, jsonFormatter])
  .config(routing);
