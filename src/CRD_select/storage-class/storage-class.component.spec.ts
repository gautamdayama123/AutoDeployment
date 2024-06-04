import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageClassComponent } from './storage-class.component';

describe('StorageClassComponent', () => {
  let component: StorageClassComponent;
  let fixture: ComponentFixture<StorageClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorageClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
