// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import collectionsTemplate from './collections-list.component.html?raw';
import peopleTemplate from '../people/people-list.component.html?raw';
import apiComponentContent from '../biometrics-api/biometrics-api.component.ts?raw';

describe('SmartEnroll Legacy OpenCV 1:N Views Deprecation', () => {
    it('collections-list template displays migration banner linking to HumanID', () => {
        expect(collectionsTemplate).toContain('Deprecation Migration Banner');
        expect(collectionsTemplate).toContain('routerLink="/smart-enroll/demos/humanid-create"');
        expect(collectionsTemplate).toContain('warning_amber');
        expect(collectionsTemplate).toContain('Deprecated');
    });

    it('people-list template displays migration banner linking to HumanID', () => {
        expect(peopleTemplate).toContain('Deprecation Migration Banner');
        expect(peopleTemplate).toContain('routerLink="/smart-enroll/demos/humanid-create"');
        expect(peopleTemplate).toContain('warning_amber');
        expect(peopleTemplate).toContain('Deprecated');
    });

    it('biometrics-api component displays deprecation notice with HumanID link', () => {
        expect(apiComponentContent).toContain('Deprecated');
        expect(apiComponentContent).toContain('routerLink="/smart-enroll/demos/humanid-create"');
        expect(apiComponentContent).toContain('Legacy OpenCV biometric API routes are deprecated');
    });
});
