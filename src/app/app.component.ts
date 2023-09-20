import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  getScrollBarWidth() {
    let el = document.createElement("div");
    el.style.cssText = "overflow:scroll; visibility:hidden; position:absolute;";
    document.body.appendChild(el);
    let width = el.offsetWidth - el.clientWidth;
    el.remove();
    return `${width}px`;
  }

  ngOnInit() {
    const widthScroll = this.getScrollBarWidth()
    const body = document.body;

    function checkOverflowChange() {
      const currentOverflow: string = window.getComputedStyle(body).overflowY;
      if (currentOverflow === 'hidden') {
        document.body.style.paddingRight = `${parseInt(widthScroll)}px`
      } else if (currentOverflow === 'scroll') {
        document.body.style.paddingRight = `0px`
      }
    }

    const observer = new MutationObserver(checkOverflowChange);

    const observerConfig = {
      attributes: true,
      attributeFilter: ['style']
    };

    observer.observe(body, observerConfig);
  }
}
