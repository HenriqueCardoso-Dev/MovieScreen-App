import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HenriquePage } from './henrique.page';

describe('HenriquePage', () => {
  let component: HenriquePage;
  let fixture: ComponentFixture<HenriquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HenriquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HenriquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
