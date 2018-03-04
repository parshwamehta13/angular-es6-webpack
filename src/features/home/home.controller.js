export default class HomeController {
  constructor() {
    this.name = 'World';
    this.statusPillConfiguration = {
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
  }
}
