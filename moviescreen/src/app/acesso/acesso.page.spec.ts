import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcessoPage } from './acesso.page';

describe('AcessoPage', () => {
  let component: AcessoPage;
  let fixture: ComponentFixture<AcessoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
