import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FabricLabelComponent } from './label.component';
import { DebugElement, SimpleChange } from '@angular/core';

describe('FabricLabelComponent', () => {
  let component: FabricLabelComponent;
  let fixture: ComponentFixture<FabricLabelComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricLabelComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text passed to the content', () => {
    component.content = 'FooBar Content';
    component.ngOnChanges({
      content: new SimpleChange(null, component.content, false),
    });

    expect(debugElement.nativeElement.querySelector('label').outerHTML).toContain(component.content);
  });

  it('should contain a required attribute when required', () => {
    component.content = 'FooBar Content';
    component.required = true;
    component.ngOnChanges({
      content: new SimpleChange(null, component.content, false),
      required: new SimpleChange(null, component.required, false),
    });

    expect(debugElement.nativeElement.querySelector('label').outerHTML).toContain('required');
  });

  it('should have class root-35 when disabled', () => {
    component.content = 'FooBar Content';
    component.disabled = true;
    component.ngOnChanges({
      content: new SimpleChange(null, component.content, false),
      disabled: new SimpleChange(null, component.disabled, false),
    });

    expect(debugElement.nativeElement.querySelector('label').outerHTML).toContain('root-35');
  });

  it('should update the text when content changes', () => {
    component.content = 'FooBar Content';
    component.ngOnChanges({
      content: new SimpleChange(null, component.content, false),
    });

    expect(debugElement.nativeElement.querySelector('label').outerHTML).toContain(component.content);

    component.content = 'BarBaz Content';
    component.ngOnChanges({
      content: new SimpleChange(null, component.content, false),
    });

    expect(debugElement.nativeElement.querySelector('label').outerHTML).toContain(component.content);
  });

  it('should remove the required attribute when required is set to false', () => {
    component.content = 'FooBar Content';
    component.required = true;
    component.ngOnChanges({
      content: new SimpleChange(null, component.content, false),
      required: new SimpleChange(null, component.required, false),
    });

    expect(debugElement.nativeElement.querySelector('label').outerHTML).toContain('required');

    component.required = false;
    component.ngOnChanges({
      required: new SimpleChange(null, component.required, false),
    });

    expect(debugElement.nativeElement.querySelector('label').outerHTML).not.toContain('required');
  });

  it('should remove the root-35 class when disabled is set to false', () => {
    component.content = 'FooBar Content';
    component.disabled = true;
    component.ngOnChanges({
      content: new SimpleChange(null, component.content, false),
      disabled: new SimpleChange(null, component.disabled, false),
    });

    expect(debugElement.nativeElement.querySelector('label').outerHTML).toContain('root-35');

    component.disabled = false;
    component.ngOnChanges({
      disabled: new SimpleChange(null, component.disabled, false),
    });

    expect(debugElement.nativeElement.querySelector('label').outerHTML).not.toContain('root-35');
  });

  it('should not call to render if changes contains no updates', () => {
    spyOn((FabricLabelComponent.prototype as any), 'render').and.callThrough();

    component.ngOnChanges({});

    expect((FabricLabelComponent.prototype as any).render).not.toHaveBeenCalled();
  });

  it('should not call to render if this is the first change for all properties', () => {
    spyOn((FabricLabelComponent.prototype as any), 'render').and.callThrough();

    component.ngOnChanges({
      content: new SimpleChange(null, component.content, true),
      disabled: new SimpleChange(null, component.disabled, true),
      required: new SimpleChange(null, component.required, true),
    });

    expect((FabricLabelComponent.prototype as any).render).not.toHaveBeenCalled();
  });

  it('should not call to render if this is the current value equals the previous value for all properties', () => {
    spyOn((FabricLabelComponent.prototype as any), 'render').and.callThrough();
    component.content = 'FooBar';
    component.disabled = true;
    component.required = true;

    component.ngOnChanges({
      content: new SimpleChange(component.content, component.content, false),
      disabled: new SimpleChange(component.disabled, component.disabled, false),
      required: new SimpleChange(component.required, component.required, false),
    });

    expect((FabricLabelComponent.prototype as any).render).not.toHaveBeenCalled();
  });
});
