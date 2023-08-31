class PrintSpooler {
  private static instance: PrintSpooler;
  private printQueue: string[] = [];
  private isPrinting: boolean = false;

  private constructor() {}

  //return a class instance
  static getInstance(): PrintSpooler {
    if (!PrintSpooler.instance) {
      PrintSpooler.instance = new PrintSpooler();
    }
    return PrintSpooler.instance;
  }

  //add documents in queue and print
  addToQueue(document: string): void {
    this.printQueue.push(document);
    if (!this.isPrinting) {
      this.printNextDocument();
    }
  }

  //method for printing document
  printNextDocument(): void {
    if (this.printQueue.length > 0) {
      this.isPrinting = true;
      const nextdocument = this.printQueue.shift();
      console.log(`Printing: ${nextdocument}`);
      setTimeout(() => {
        console.log(`Finished printing: ${nextdocument}`);
        this.isPrinting = false;
        this.printNextDocument();
      }, 2000);
    }
  }
}

const spooler = PrintSpooler.getInstance();
const spooler1 = PrintSpooler.getInstance();
const spooler2 = PrintSpooler.getInstance();

spooler.addToQueue("Document A");
spooler1.addToQueue("Document B");
spooler2.addToQueue("Document C");

//spooler, spooler1 and spooler2 values are same.