import angular from 'angular';
import statusPill from './statusPill.js';
import './statusPill.scss';

export default angular.module('directives.statusPill', [])
  .directive('statusPill', statusPill)
  .name;