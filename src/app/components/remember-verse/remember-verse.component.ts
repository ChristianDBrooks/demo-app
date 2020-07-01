import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-remember-verse',
  templateUrl: './remember-verse.component.html',
  styleUrls: ['./remember-verse.component.scss']
})
export class RememberVerseComponent implements OnInit {
  fullVerse: String;
  hiddenVerse: String;
  attemptedVerse: String;
  verseCompletedFlag: Boolean = false;
  saveEnabledFlag: Boolean = false;
  showHintFlag: Boolean = false;
  hintsUsed: number = 0;
  clockTimer: any;
  clockTime: number = 0;
  clockStarted: Boolean = false;

  @ViewChild('inputVerse', { static: true }) inputVerseElRef: ElementRef;
  @ViewChild('verseAttempt', { static: true }) verseAttemptElRef: ElementRef;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('saved-verse')) {
      this.inputVerseElRef.nativeElement.value = localStorage.getItem('saved-verse');
      this.updateSaveVerse(this.inputVerseElRef.nativeElement.value);
    }
  }

  updateSaveVerse(inputVerseVal) {
    if (inputVerseVal && inputVerseVal.length > 0) {
      this.saveEnabledFlag = true;
    } else {
      this.saveEnabledFlag = false;
    }
  }

  saveVerse(inputVerseVal) {
    this.fullVerse = inputVerseVal.value;

    this.saveVerseLocally(inputVerseVal.value);

    inputVerseVal.value = "";

    this.hideVerse();
    this.resetClock();
    this.saveEnabledFlag = false;
    this.verseCompletedFlag = false;
    this.verseAttemptElRef.nativeElement.value = "";
  }

  saveVerseLocally(value) {
    localStorage.setItem('saved-verse', value);
  }

  resetVerse(verseAttemptEl) {
    this.hideVerse();
    this.resetClock();
    this.verseCompletedFlag = false;
    verseAttemptEl.value = "";
  }

  resetClock() {
    this.stopClock();
    this.clockTime = 0;
    this.clockStarted = false;
  }

  hideVerse() {
    this.hiddenVerse = this.fullVerse.replace(/\w/g ,"-");
  }

  showHint() {
    this.hintsUsed++;
    this.showHintFlag = true;
    setTimeout( () => {
      this.showHintFlag = false;
    }, 8 * 1000)
  }

  checkHiddenVerse(value) {
    this.attemptedVerse = value;
    this.startClock();
    for(let i=0; i < value.length; i++) {
      if (value[i] === this.fullVerse[i]) {
        this.hiddenVerse = this.replaceAt(this.hiddenVerse, i, this.fullVerse[i]);
      } else {
        break;
      }
    }
    this.checkCompletion();
  }

  checkCompletion() {
    if (this.fullVerse === this.attemptedVerse) {
      this.verseCompletedFlag = true;
      this.stopClock();
    }
  }

  replaceAt(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
  }

  startClock() {
    if (!this.clockStarted) {
      this.countUp();
      this.clockStarted = true;
    }
  }

  stopClock() {
    clearTimeout(this.clockTimer)
  }

  countUp() {
    this.clockTimer = setTimeout( () => {
      this.clockTime++
      this.countUp();
    }, 1000 )
  }

}
