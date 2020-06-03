import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectionalmapPage } from './directionalmap.page';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('DirectionalmapPage', () => {
  let component: DirectionalmapPage;
  let fixture: ComponentFixture<DirectionalmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionalmapPage ],
      imports: [IonicModule.forRoot(),
      ReactiveFormsModule,
        FormsModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectionalmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
