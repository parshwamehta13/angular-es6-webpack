export default class StatusPillWrapperController {
    constructor() {
      this.configuration = {
          status: {
            name: "dataCompression",
            displayName: "Data Compression"
          },
          icon: {
            name: 'watch_later',
            class: 'text-primary',
            value: 'Running'
          },
          tooltip: {
            template: "Data Compression: Running"
          }
        }; 
      this.obj = {data: this.configuration, options: {mode: 'tree'}};
      console.log(this.obj);
    }
    changeData() {
      this.obj.data = {foo: 'bar'};
    }
    changeData () {
      this.obj.data = {foo: 'bar'};
    }
    changeOptions () {
      this.obj.options.mode = this.obj.options.mode == 'tree' ? 'code' : 'tree';
    }
    pretty(obj) {
      return obj;
    }
}