import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tonnij';
  private routerSubscription: any;

  showHeader:boolean = false;


  constructor(
    private router: Router,
    private route : ActivatedRoute
  ) { }

  invoiceId:any;
  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if(event.url == '/' || event.url == '/login' || event.url == '/registration' || event.url == '/invoice-page'){
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
