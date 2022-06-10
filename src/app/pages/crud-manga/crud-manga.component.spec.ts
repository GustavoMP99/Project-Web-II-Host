import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMangaComponent } from './crud-manga.component';

describe('CrudMangaComponent', () => {
  let component: CrudMangaComponent;
  let fixture: ComponentFixture<CrudMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMangaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
