import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectComponent } from './dialog-project.component';

describe('DialogProjectComponent', () => {
  let component: DialogProjectComponent;
  let fixture: ComponentFixture<DialogProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
