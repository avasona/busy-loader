import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
})
export class AppComponent {
  title = "app";
  spinnerLarge = false;
  spinnerSmall = false;
  loadingDots = false;
  overlayOn = true;

  switchSpinnerLarge() {
    this.spinnerLarge = !this.spinnerLarge;
  }

  switchSpinnerSmall() {
    this.spinnerSmall = !this.spinnerSmall;
  }

  switchLoadingDots() {
    this.loadingDots = !this.loadingDots;
  }

  switchOverlay() {
    this.overlayOn = false;
    setTimeout(() => {
      this.overlayOn = true;
    }, 5000);
  }

}
