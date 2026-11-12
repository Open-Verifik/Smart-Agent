import '@angular/compiler';
import { describe, expect, it, vi } from 'vitest';
import { BusinessBreadcrumbsComponent } from './business-breadcrumbs.component';
import { BUSINESS_WIZARD_STEPS } from './business-setup.types';

describe('BusinessBreadcrumbsComponent', () => {
    it('should create the component instance', () => {
        const component = new BusinessBreadcrumbsComponent();
        expect(component).toBeTruthy();
    });

    it('should configure all 6 wizard steps with labels', () => {
        const component = new BusinessBreadcrumbsComponent();
        expect(component.steps.length).toBe(6);
        expect(component.steps).toEqual(BUSINESS_WIZARD_STEPS);
        expect(component.stepLabels.length).toBe(6);
        expect(component.stepLabels[0]).toBe('Configuración');
        expect(component.stepLabels[5]).toBe('Estilo Visual');
    });

    it('should emit stepSelected when onStepClick is called', () => {
        const component = new BusinessBreadcrumbsComponent();
        const spy = vi.fn();
        component.stepSelected.subscribe(spy);

        component.onStepClick(3);
        expect(spy).toHaveBeenCalledWith(3);
    });
});
