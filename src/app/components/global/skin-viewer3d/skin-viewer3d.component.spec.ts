import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinViewer3dComponent } from './skin-viewer3d.component';

describe('SkinViewer3dComponent', () => {
  let component: SkinViewer3dComponent;
  let fixture: ComponentFixture<SkinViewer3dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkinViewer3dComponent]
    });
    fixture = TestBed.createComponent(SkinViewer3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
