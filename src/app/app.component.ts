import { Component, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core';
import { of, from } from 'rxjs';
import { takeWhile, map, filter } from 'rxjs/operators';
import {
  CdkVirtualScrollViewport,
  ScrollDispatcher,
} from '@angular/cdk/scrolling';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;
  searchPageNumber: number;
  searchResults: Array<any>;
  pagesize = 50;
  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private cd: ChangeDetectorRef,
    private zone: NgZone
  ) {
    this.searchPageNumber = 0;
    this.searchResults = [];
  }

  ngOnInit(): void {
    this.nextSearchPage(this.searchPageNumber);
  }

  trackByFn(index, item) {
    return item;
  }

  ngAfterViewInit(): void {
    // console.log(this.virtualScroll);
    this.scrollDispatcher
      .scrolled()
      .pipe(
        filter(
          (event) =>
            this.virtualScroll.getRenderedRange().end ===
            this.virtualScroll.getDataLength()
        )
      )
      .subscribe((event) => {
        let offSeti = this.virtualScroll.measureScrollOffset('top');
        console.log(`append offset: ${offSeti}`);
        this.searchPageNumber++;
        this.nextSearchPage(this.searchPageNumber);
        //this.cd.detectChanges();
      });
    //this.scrollDispatcher.register(this.scrollable);
    // this.scrollDispatcher.scrolled(1000)
    //  .subscribe((viewport: CdkVirtualScrollViewport) => {
    //      console.log('scroll triggered', viewport);
    //  });

    // this.virtualScroll.renderedRangeStream.subscribe(range => {
    //  console.log('range', range);
    //   console.log('range2', this.virtualScroll.getRenderedRange());
    //   if (this.virtualScroll.getRenderedRange().end % 10 === 0) {
    //     this.nextSearchPage(++this.searchPageNumber);
    //   }
    // });
  }

  getResults(pageNumber) {
    let result = [];
    for (let i = 0; i < this.pagesize; i++)
      result.push(pageNumber * this.pagesize + i);
    return of(result);
  }
  nextSearchPage(pageNumber: number): void {
    this.getResults(pageNumber).subscribe((pagedResults) => {
      this.zone.run(() => {
        setTimeout(() => {
          this.searchResults = this.searchResults.concat(pagedResults);
        }, 200); //mimic API time delay
      });

      //console.log(this.searchResults);
    });
  }

  click() {
    this.searchResults = this.searchResults.concat([10]);
    this.cd.detectChanges();
  }
}
