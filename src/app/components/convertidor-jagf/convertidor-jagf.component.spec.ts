import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorJagfComponent } from './convertidor-jagf.component';

describe('ConvertidorJagfComponent', () => {
  let component: ConvertidorJagfComponent;
  let fixture: ComponentFixture<ConvertidorJagfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertidorJagfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertidorJagfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
