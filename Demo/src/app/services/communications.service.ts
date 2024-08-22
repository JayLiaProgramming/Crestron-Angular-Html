import {Injectable, NgZone} from '@angular/core';

declare var CrComLib: any;

const maxDigitalJoins: number = 784 + 1;
const maxAnalogJoins: number = 733 + 1;
const maxSerialJoins: number = 772 + 1;

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  constructor(private ngZone: NgZone) {
    const maxJoins = Math.max(maxDigitalJoins, maxAnalogJoins, maxSerialJoins);
    for (let i = 1; i <= maxJoins; i++) {
      if (i <= maxDigitalJoins) {
        this.bool[i] = this.subscribeState<boolean>('b', `${i}`, (value: boolean) => { this.bool[i] = value; });
      }

      if (i <= maxAnalogJoins) {
        this.analog[i] = this.subscribeState<number>('n', `${i}`, (value: number) => { this.analog[i] = value; });
      }

      if (i <= maxSerialJoins) {
        this.serial[i] = this.subscribeState<string>('s', `${i}`, (value: string) => { this.serial[i] = value; });
      }
    }

    this.wifiStrength = this.subscribeState<number>('n', 'Csig.System_WiFi_Signal_Strength_fb', (value: number) => { this.wifiStrength = value; });
  }

  public bool: boolean[] = new Array(maxDigitalJoins).fill(false);
  public analog: number[] = new Array(maxAnalogJoins).fill(0);
  public serial: string[] = new Array(maxSerialJoins).fill('');

  public wifiStrength: number = 0;

  public subscribeState<T>(type: string, joinId: string, callback: (value: T) => void): T {
    CrComLib.subscribeState(type, joinId, (value: T) => {
      this.ngZone.run(() => {
        callback(value);
      });
    });
    return CrComLib.getState(type, joinId) as T;
  }

  public pulseBool(joinId: number | string): void
  {
    CrComLib.publishEvent('b', `${joinId}`, true);
    CrComLib.publishEvent('b', `${joinId}`, false);
  }

  public setBool(joinId: number): void
  {
    CrComLib.publishEvent('b', `${joinId}`, true);
  }

  public releaseBool(joinId: number): void
  {
    CrComLib.publishEvent('b', `${joinId}`, false);
  }

  public setAnalog(number: number, value: number): void {
    CrComLib.publishEvent('n', `${number}`, value);
  }
}
