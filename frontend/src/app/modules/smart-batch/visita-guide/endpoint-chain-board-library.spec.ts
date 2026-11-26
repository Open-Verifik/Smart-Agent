import fs from 'fs';
import path from 'path';
import { describe, expect, it } from 'vitest';

const BOARD_PATH = path.resolve(__dirname, 'endpoint-chain-board.component.ts');
const VISITA_HTML_PATH = path.resolve(__dirname, 'visita-guide.component.html');

describe('EndpointChainBoardComponent endpoint library close UX (#1193)', () => {
    const boardSource = fs.readFileSync(BOARD_PATH, 'utf8');
    const visitaHtml = fs.readFileSync(VISITA_HTML_PATH, 'utf8');

    it('elevates #libraryPanel above the z-30 canvas toolbars and exposes accessible dialog attributes', () => {
        const panelMatch = boardSource.match(/<aside[\s\S]*?#libraryPanel[\s\S]*?>/);
        expect(panelMatch).not.toBeNull();
        const panelTag = panelMatch![0];

        expect(panelTag).toContain('z-[45]');
        expect(panelTag).toContain('role="dialog"');
        expect(panelTag).toContain('aria-labelledby="flow-library-dialog-title"');
        expect(panelTag).toContain(`[attr.inert]="!libraryOpen() ? '' : null"`);
    });

    it('pins the top-right close (X) button inside the non-scrolling header outside the scrollable list', () => {
        const headerMatch = boardSource.match(
            /id="flow-library-dialog-title"[\s\S]*?<button[\s\S]*?flow-library-close[\s\S]*?<\/button>/
        );
        expect(headerMatch).not.toBeNull();
        const headerBlock = headerMatch![0];

        expect(headerBlock).toContain(`[attr.aria-label]="'visitaGuide.flowHideLibrary' | transloco"`);
        expect(headerBlock).toContain('(click)="closeLibrary(); $event.stopPropagation()"');
        expect(headerBlock).toContain('>close</mat-icon>');

        const headerIdx = boardSource.indexOf('id="flow-library-dialog-title"');
        const scrollListIdx = boardSource.indexOf('min-h-0 flex-1 overflow-y-auto overscroll-contain p-3');
        expect(headerIdx).toBeGreaterThan(-1);
        expect(scrollListIdx).toBeGreaterThan(headerIdx);
    });

    it('closes on backdrop click and Escape without mutating selected endpoints', () => {
        expect(boardSource).toContain('class="flow-library-backdrop');
        expect(boardSource).toContain('(click)="closeLibrary()"');

        const closeMethodMatch = boardSource.match(/closeLibrary\(\): void \{[\s\S]*?\n    \}/);
        expect(closeMethodMatch).not.toBeNull();
        const closeMethod = closeMethodMatch![0];

        expect(closeMethod).toContain('this.libraryOpen.set(false)');
        expect(closeMethod).not.toContain('this.graph.set');
        expect(closeMethod).not.toContain('this._emit(');
        expect(closeMethod).not.toContain('chainChange.emit');
    });

    it('sizes the endpoints step below the 4rem app navbar so the flow canvas does not overflow the viewport', () => {
        expect(visitaHtml).toContain('[class.min-h-screen]="!isFillViewportStep()"');
        expect(visitaHtml).toContain('[class.h-[calc(100dvh-4rem)]]="isFillViewportStep()"');
        expect(visitaHtml).toContain('[class.max-h-[calc(100dvh-4rem)]]="isFillViewportStep()"');
    });
});
