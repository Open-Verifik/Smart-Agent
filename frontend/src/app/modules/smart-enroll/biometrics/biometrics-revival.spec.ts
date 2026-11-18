// @vitest-environment jsdom
import '@angular/compiler';
import 'zone.js';
import 'zone.js/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import type { FuseNavigationItem } from '@fuse/components/navigation';
import { defaultNavigation, horizontalNavigation } from '../../../mock-api/common/navigation/data';
import apiComponentContent from '../biometrics-api/biometrics-api.component.ts?raw';
import collectionsTemplate from '../collections/collections-list.component.html?raw';
import { DEFAULT_FACE_SEARCH_MIN_SCORE } from './biometrics.constants';
import {
    LEGACY_DEMO_REDIRECTS,
    TRADITIONAL_SECTIONS,
    demoRoute,
    getAllDemoEntries,
} from '../demos/demo-catalog';
import demosRoutesContent from '../demos/demos.routes.ts?raw';
import {
    DEFAULT_FACE_COMPARE_MIN_SCORE,
    FACE_SEARCH_SCORE_PRESETS,
} from '../demos/services/biometrics-demo.types';
import { removeGalleryImageAt } from '../demos/services/biometrics-demo.util';
import { DemoScoreSliderComponent } from '../demos/shared/demo-score-slider.component';
import { DemoSearchModeToggleComponent } from '../demos/shared/demo-search-mode-toggle.component';
import peopleTemplate from '../people/people-list.component.html?raw';

beforeAll(() => {
    try {
        getTestBed().initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting()
        );
    } catch {
        // Environment already initialized
    }
});

const findNavNode = (items: FuseNavigationItem[], id: string): FuseNavigationItem | undefined => {
    for (const item of items) {
        if (item.id === id) return item;
        if (item.children?.length) {
            const match = findNavNode(item.children, id);
            if (match) return match;
        }
    }
    return undefined;
};

describe('SmartEnroll Biometrics 1:N Views & Demos Revival', () => {
    it('removes deprecation banners from Collections, People, and Biometrics API views', () => {
        expect(collectionsTemplate).not.toContain('Deprecation Migration Banner');
        expect(collectionsTemplate).not.toContain('deprecationBannerTitle');
        expect(peopleTemplate).not.toContain('Deprecation Migration Banner');
        expect(peopleTemplate).not.toContain('deprecationBannerTitle');
        expect(apiComponentContent).not.toContain('Deprecated');
        expect(apiComponentContent).not.toContain('Legacy OpenCV');
    });

    it('exposes Collections, People, and Biometrics API in both default and horizontal navigation', () => {
        for (const nav of [defaultNavigation, horizontalNavigation]) {
            const smartEnroll = findNavNode(nav, 'smart-enroll');
            const ids = (smartEnroll?.children ?? []).map((c) => c.id);
            expect(ids).toContain('smart-enroll-collections');
            expect(ids).toContain('smart-enroll-people');
            expect(ids).toContain('smart-enroll-api');
            expect(ids).toContain('smart-enroll-demos');
        }
    });

    it('restores all 6 SmartEnroll demo sections (18 demos) and removes OpenCV deprecation redirects', () => {
        const sectionIds = TRADITIONAL_SECTIONS.map((s) => s.id);
        expect(sectionIds).toEqual(['enroll', 'manage', 'search', 'detection', 'comparison', 'humanAuthn']);

        const allEntries = getAllDemoEntries();
        expect(allEntries).toHaveLength(18);
        expect(demoRoute('search-person')).toBe('/smart-enroll/demos/search-person');

        const revivedSlugs = [
            'create-collection',
            'create-person',
            'create-person-with-liveness',
            'update-person',
            'delete-person',
            'search-person',
            'search-live-person',
            'search-active-user',
            'search-crops',
            'verify-face',
        ];
        for (const slug of revivedSlugs) {
            expect(LEGACY_DEMO_REDIRECTS[slug]).toBeUndefined();
            expect(demosRoutesContent).toContain(`path: '${slug}'`);
        }
    });

    it('uses ArcFace calibrated threshold constants and removes gallery previews safely', () => {
        expect(DEFAULT_FACE_SEARCH_MIN_SCORE).toBe(0.65);
        expect(DEFAULT_FACE_COMPARE_MIN_SCORE).toBe(0.7);
        expect(FACE_SEARCH_SCORE_PRESETS).toEqual([0.55, 0.65, 0.7, 0.75]);

        const revokeSpy = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});
        const next = removeGalleryImageAt(['a', 'b', 'c'], ['blob:1', 'data:2', 'blob:3'], 0);
        expect(next.images).toEqual(['b', 'c']);
        expect(next.previews).toEqual(['data:2', 'blob:3']);
        expect(revokeSpy).toHaveBeenCalledWith('blob:1');
        revokeSpy.mockRestore();
    });

    it('renders accessible DemoScoreSliderComponent and DemoSearchModeToggleComponent', async () => {
        TestBed.resetTestingModule();
        await TestBed.configureTestingModule({
            imports: [DemoScoreSliderComponent, DemoSearchModeToggleComponent],
        }).compileComponents();

        const sliderFixture = TestBed.createComponent(DemoScoreSliderComponent);
        sliderFixture.componentInstance.inputId = 'test-slider';
        sliderFixture.componentInstance.label = 'Min score 0.65';
        sliderFixture.componentInstance.value = 0.65;
        sliderFixture.componentInstance.presets = FACE_SEARCH_SCORE_PRESETS;
        sliderFixture.detectChanges();

        const sliderEl = sliderFixture.nativeElement as HTMLElement;
        const range = sliderEl.querySelector('input[type="range"]') as HTMLInputElement;
        expect(range.getAttribute('aria-valuetext')).toBe('0.65');
        const emitted: number[] = [];
        sliderFixture.componentInstance.valueChange.subscribe((v) => emitted.push(v));
        const presetBtns = Array.from(sliderEl.querySelectorAll('button'));
        presetBtns[2].click();
        expect(emitted).toEqual([0.7]);

        const toggleFixture = TestBed.createComponent(DemoSearchModeToggleComponent);
        toggleFixture.componentInstance.labelId = 'mode-lbl';
        toggleFixture.componentInstance.label = 'Search mode';
        toggleFixture.componentInstance.mode = 'FAST';
        toggleFixture.detectChanges();

        const toggleEl = toggleFixture.nativeElement as HTMLElement;
        const buttons = Array.from(toggleEl.querySelectorAll('button'));
        expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
        expect(buttons[1].getAttribute('aria-pressed')).toBe('false');
        const modes: string[] = [];
        toggleFixture.componentInstance.modeChange.subscribe((m) => modes.push(m));
        buttons[1].click();
        expect(modes).toEqual(['ACCURATE']);
    });
});
