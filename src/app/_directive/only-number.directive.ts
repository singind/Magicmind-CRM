import { Directive , ElementRef , HostListener , Input  } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {
  regexStr = '^[0-9]*$';
  constructor(private e1 : ElementRef) { }

  @Input() appOnlyNumber: boolean;



  @HostListener('keydown',['$event']) onKeyDown(event) {
   // console.log(event);
    let e = <KeyboardEvent> event;
    if(this.appOnlyNumber){
      // console.log(this.appOnlyNumber);
      // console.log(e);
      // console.log([46,8,9,27,13,110,190].indexOf(e.keyCode));
      if([46,8,9,27,13,110,190].indexOf(e.keyCode) !== -1 ||
        (e.keyCode === 65 && (e.ctrlKey  || e.metaKey )) ||     // for Ctrl + A
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) || // for Ctrl+C
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey))  || // for Ctrl+v
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey))  ||    // Allow: Ctrl+X
        (e.keyCode  >= 35 && e.keyCode <= 39 ) // Allow Home , end , left ,right
      ){
      //  console.log(e.keyCode);

        return ; // Let It happen Don't do Anything
      }

      // if((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode > 96 || e.keyCode > 105)){
      //   console.log(e);
      //   e.preventDefault();
      // }

      let ch = String.fromCharCode(e.keyCode);
      let regEx =  new RegExp(this.regexStr);
      if(regEx.test(ch))
        return;
      else
         e.preventDefault();
      }



    }
  }




//46  => 0
//8   => backspace
//9   = > tab
//27   => escape
//13 => enter
//110 => numpad
//190 => .
//65  => 5
//67 => 7
//86  => v
//88  => x
//35  => end
//39  => Arrow Right
//48   => o
//57  9
//96   0
//105  =>  numpad9
