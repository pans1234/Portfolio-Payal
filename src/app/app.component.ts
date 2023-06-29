import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Payal_Portfolio';
  @HostBinding('class.pc') pcMode: boolean = false ;
  constructor(private breakpointObserver : BreakpointObserver , private element : ElementRef) {
    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait , Breakpoints.WebLandscape])
    .subscribe({
      next : (result)=>{
        for( let breakpoint of Object.keys(result.breakpoints)){
          if(result.breakpoints[breakpoint]){
            if(breakpoint === Breakpoints.HandsetPortrait){
              // this.pcMode = false;
              this.element.nativeElement.classList.remove('pc');

            }
            
            if(breakpoint === Breakpoints.WebLandscape){
              // this.pcMode = true;
              this.element.nativeElement.classList.add('pc');


            }
          }
        }        
      }
    })
   }

}
