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
    }
}