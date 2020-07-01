import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let timeInSeconds = value;
    let minutes;
    let seconds;
    let displayedMinutes = "00";
    let displayedSeconds = "00";

    minutes = Math.floor(timeInSeconds / 60)
    seconds = timeInSeconds % 60

    if (minutes < 10) {
      displayedMinutes = "0" + minutes;
    } else if (minutes > 99) {
      displayedMinutes = minutes;
    }

    if (seconds < 10) {
      displayedSeconds = "0" + seconds;
    } else {
      displayedSeconds = seconds;
    }
    return displayedMinutes + ":" + displayedSeconds;
  }

}
