class Log {
  subject: string;
  message: string;
  objects: any[];

  constructor(subject: string, message: string, ...objects: any[]) {
    this.subject = subject;
    this.message = message;
    this.objects = objects;
  }
}

export default Log;
