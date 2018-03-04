export default function statusPill(){
    return {
        restrict: 'E',
        template: require('./statusPill.html'),
        scope: {
            configuration: '=configuration',  // options = configuration of card {object}
        }
      };
};