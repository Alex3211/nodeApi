import * as mongoose from 'mongoose';
import utils from './Utils';

class Mongo {
  // tslint:disable:no-console
  public mongoose = mongoose;
  public db: mongoose.Connection;
  private options: object;

  constructor() {
    this.options = {
      autoIndex: false,
      connectTimeoutMS: 10000,
      family: 4,
      useNewUrlParser: true,
      socketTimeoutMS: 45000,
    };
    this.launch();
  }

  public launch() {
    this.mongoose.connect(`${utils.getMONGO_URI()}`, this.options);
    this.db = mongoose.connection;
    this.db.on('error', (e) => console.log(`${utils.newDate()}: connection error:` + e));
    this.db.once('open', () => console.log(`${utils.newDate()}: Connected to Mongo`));
  }
}

export default Mongo;