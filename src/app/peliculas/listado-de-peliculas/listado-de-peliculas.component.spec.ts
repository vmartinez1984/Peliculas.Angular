import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDePeliculasComponent } from './listado-de-peliculas.component';

describe('ListadoDePeliculasComponent', () => {
  let component: ListadoDePeliculasComponent;
  let fixture: ComponentFixture<ListadoDePeliculasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoDePeliculasComponent]
    });
    fixture = TestBed.createComponent(ListadoDePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
