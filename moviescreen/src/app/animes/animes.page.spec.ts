import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimesPage } from './animes.page';

describe('AnimesPage', () => {
  let component: AnimesPage;
  let fixture: ComponentFixture<AnimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
