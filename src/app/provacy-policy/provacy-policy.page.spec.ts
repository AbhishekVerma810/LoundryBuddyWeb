import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvacyPolicyPage } from './provacy-policy.page';

describe('ProvacyPolicyPage', () => {
  let component: ProvacyPolicyPage;
  let fixture: ComponentFixture<ProvacyPolicyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvacyPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
