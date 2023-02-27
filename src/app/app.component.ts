import { Component } from '@angular/core';
import { NgTinyUrlService } from 'ng-tiny-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'freekyk-India-URL-Shortner';
  model = {
    inputUrl: '',
  };
  UrlError = false;
  isformsubmitted = false;
  shortUrl = '';
  isTextCopied = false;
  isLoading = false;
  constructor(private tinyUrlService: NgTinyUrlService) {}

  onSubmit(urlForm: any) {
    if (urlForm.valid) {
      this.isLoading = true;
      this.tinyUrlService.shorten(this.model.inputUrl).subscribe(
        (data) => {
          this.shortUrl = data;
          this.isformsubmitted = true;
          this.isLoading = false;
        },
        (error) => {
          this.UrlError = true;
          this.isLoading = false;
        }
      );
    }
  }

  copyUrl(shortUrlElementRef: any) {
    let inputElement = document.createElement('input');

    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('value', shortUrlElementRef.innerHTML);

    inputElement.select();
    inputElement.setSelectionRange(0, 999999); // For Mobile Selection
    try {
      navigator.clipboard.writeText(inputElement.value);

      this.isTextCopied = true;

      setTimeout(() => {
        this.isTextCopied = false;
      }, 2000);
    } catch (e) {
      console.log('error while copying..', e);
    }
  }

  reset() {
    this.model.inputUrl = '';
    this.isformsubmitted = false;
    this.isTextCopied = false;
  }
}
