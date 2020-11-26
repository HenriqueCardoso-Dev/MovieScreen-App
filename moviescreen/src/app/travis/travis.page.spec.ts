import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravisPage } from './travis.page';

describe('TravisPage', () => {
  let component: TravisPage;
  let fixture: ComponentFixture<TravisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
