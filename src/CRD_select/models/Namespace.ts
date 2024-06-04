class Namespace {
    apiVersion: string = "v1";
    kind: string = "Namespace";
    metadata: {
      labels: {
        [key: string]: string;
      };
      name: string;
    } = { labels: {}, name: '' };
  
    constructor(metadata: { labels: { [key: string]: string }; name: string }) {
      this.metadata = metadata;
    }
  
    addLabel(key: string, value: string) {
      this.metadata.labels[key] = value;
    }
  
    removeLabel(key: string) {
      delete this.metadata.labels[key];
    }
  }

  export default Namespace;
  