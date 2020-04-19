import {
  Directive,
  HostListener,
  Input, OnInit, Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {ScreenConfService} from '../services/screen-conf.service';
import {BreakpointObserver, BreakpointState, MediaMatcher} from '@angular/cdk/layout';

@Directive({
  selector: '[onlyForScreen]'
})
export class DetectScreenDirective implements OnInit {

  device: string;
  scrWidth: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
    private screenConfService: ScreenConfService,
    private media: MediaMatcher,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.scrWidth = screenConfService.config.tablet;
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      `(min-width: ${this.screenConfService.config.mobile}px)`,
      `(min-width: ${this.screenConfService.config.tablet}px)`
    ]).subscribe(this.deviceListener);
    }

  @Input()
  set onlyForScreen(device: string) {
    this.device = device;
  }

  @HostListener('window:resize', ['$event'])
  deviceListener = (state: BreakpointState) => {

    this.scrWidth = window.innerWidth;
    this.viewContainer.clear();

    if (this.scrWidth < this.screenConfService.config.mobile) {
      // Mobile
      return this.device === 'mobile' && this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (
      this.screenConfService.config.mobile <= this.scrWidth &&
      this.scrWidth < this.screenConfService.config.tablet
    ) {
      // tables
      return this.device === 'tablet' && this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (this.screenConfService.config.tablet <= this.scrWidth) {
      // Desktop
      return this.device === 'desktop' && this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
