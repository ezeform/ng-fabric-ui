import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FabricSpinnerComponent } from './spinner.component';
import { SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { DebugElement, SimpleChange } from '@angular/core';

describe('FabricSpinnerComponent', () => {
  let component: FabricSpinnerComponent;
  let fixture: ComponentFixture<FabricSpinnerComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricSpinnerComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the ms-Spinner--xSmall when size is set to xSmall', () => {
    component.size = SpinnerSize.xSmall;
    component.ngOnChanges({
      size: new SimpleChange(null, component.size, false),
    });

    expect(debugElement.nativeElement.querySelector('.ms-Spinner').outerHTML).toContain('ms-Spinner--xSmall');
  });

  it('should contain the ms-Spinner--small when size is set to small', () => {
    component.size = SpinnerSize.small;
    component.ngOnChanges({
      size: new SimpleChange(null, component.size, false),
    });

    expect(debugElement.nativeElement.querySelector('.ms-Spinner').outerHTML).toContain('ms-Spinner--small');
  });

  it('should contain the ms-Spinner--medium when size is set to medium', () => {
    component.size = SpinnerSize.medium;
    component.ngOnChanges({
      size: new SimpleChange(null, component.size, false),
    });

    expect(debugElement.nativeElement.querySelector('.ms-Spinner').outerHTML).toContain('ms-Spinner--medium');
  });

  it('should contain the ms-Spinner--large when size is set to large', () => {
    component.size = SpinnerSize.large;
    component.ngOnChanges({
      size: new SimpleChange(null, component.size, false),
    });

    expect(debugElement.nativeElement.querySelector('.ms-Spinner').outerHTML).toContain('ms-Spinner--large');
  });

  it('should contain the label text passed to it', () => {
    component.label = 'FooBar Label';
    component.ngOnChanges({
      label: new SimpleChange(null, component.label, false),
    });

    expect(debugElement.nativeElement.querySelector('.ms-Spinner-label').outerHTML).toContain(component.label);
  });

  it('should update the size of the spinner if size changes', () => {
    component.size = SpinnerSize.small;
    component.ngOnChanges({
      size: new SimpleChange(null, component.size, false),
    });
    expect(debugElement.nativeElement.querySelector('.ms-Spinner').outerHTML).toContain('ms-Spinner--small');

    component.size = SpinnerSize.medium;
    component.ngOnChanges({
      size: new SimpleChange(null, component.size, false),
    });
    expect(debugElement.nativeElement.querySelector('.ms-Spinner').outerHTML).toContain('ms-Spinner--medium');
  });

  it('should update the label if the data changes', () => {
    component.label = 'FooBar Label';
    component.ngOnChanges({
      label: new SimpleChange(null, component.label, false),
    });
    expect(debugElement.nativeElement.querySelector('.ms-Spinner-label').outerHTML).toContain(component.label);

    component.label = 'BarBaz Label';
    component.ngOnChanges({
      label: new SimpleChange(null, component.label, false),
    });
    expect(debugElement.nativeElement.querySelector('.ms-Spinner-label').outerHTML).toContain(component.label);
  });

  it('should not call to render if changes contains no updates', () => {
    spyOn((FabricSpinnerComponent.prototype as any), 'render').and.callThrough();

    component.ngOnChanges({});

    expect((FabricSpinnerComponent.prototype as any).render).not.toHaveBeenCalled();
  });

  it('should not call to render if this is the first change for all properties', () => {
    spyOn((FabricSpinnerComponent.prototype as any), 'render').and.callThrough();

    component.ngOnChanges({
      label: new SimpleChange(null, component.label, true),
      size: new SimpleChange(null, component.size, true),
    });

    expect((FabricSpinnerComponent.prototype as any).render).not.toHaveBeenCalled();
  });

  it('should not call to render if this is the current value equals the previous value for all properties', () => {
    spyOn((FabricSpinnerComponent.prototype as any), 'render').and.callThrough();
    component.label = 'FooBar';
    component.size = SpinnerSize.small;

    component.ngOnChanges({
      label: new SimpleChange(component.label, component.label, false),
      size: new SimpleChange(component.size, component.size, false),
    });

    expect((FabricSpinnerComponent.prototype as any).render).not.toHaveBeenCalled();
  });
});

