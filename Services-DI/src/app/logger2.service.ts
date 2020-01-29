import {LoggerService} from './logger.service';
import {Injectable} from '@angular/core';

@Injectable()
export class Logger2Service {
  constructor(private logger: LoggerService, private postfix: string) {
  }

  public log(msg: string) {
    this.logger.log(msg + ' - ' + this.postfix);
  }
}
//
// export class Logger2Service {
//   public log(msg: string) {
//     console.log(msg + ' - LOGGER 2');
//   }
// }
