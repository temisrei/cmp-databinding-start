import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {name: string, type: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
    console.log(`Text Content: ${this.header.nativeElement.textContent}`);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
