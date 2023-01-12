import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsincornaComponent } from './asincorna.component';

describe('AsincornaComponent', () => {
  let component: AsincornaComponent;
  let fixture: ComponentFixture<AsincornaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsincornaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsincornaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
