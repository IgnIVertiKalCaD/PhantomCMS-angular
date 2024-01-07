import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector
} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  appendComponentToBody(component: any) {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);

  }

  removeComponentFromBody(componentRef: any) {
    // 1. Remove the component from the ng component tree
    this.appRef.detachView(componentRef.hostView);

    // 2. Destroy the component
    componentRef.destroy();

    // 3. Remove the DOM element from the body
    if (componentRef.location.nativeElement && componentRef.location.nativeElement.parentNode) {
      componentRef.location.nativeElement.parentNode.removeChild(componentRef.location.nativeElement);
    }
  }
}
