import { describe, expect, it } from 'vitest';
import { HEADER_LOGO_BAND_HEIGHT, HEADER_LOGO_BAND_TOP, HEADER_LOGO_INSET, HEADER_LOGO_MAX_HEIGHT, HEADER_LOGO_MIN_HEIGHT, fitHeaderLogoSize, headerLogoAlignAt, placeCompanyLogos, placeHeaderLogos } from './header-logos.util';
import { ReportHeaderLogo } from './smart-report.service';

const logo = (partial: Partial<ReportHeaderLogo> & Pick<ReportHeaderLogo, 'id' | 'align'>): ReportHeaderLogo => ({
    src: 'data:image/png;base64,aa',
    width: 140,
    height: 44,
    ...partial,
});

describe('placeHeaderLogos', () => {
    const pageWidth = 794;

    it('anchors a logo to the left, center, or right of the header band', () => {
        const placed = placeHeaderLogos(
            [logo({ id: 'l', align: 'left' }), logo({ id: 'c', align: 'center' }), logo({ id: 'r', align: 'right' })],
            pageWidth
        );
        const left = placed.find((item) => item.id === 'l')!;
        const center = placed.find((item) => item.id === 'c')!;
        const right = placed.find((item) => item.id === 'r')!;
        expect(left.x).toBe(HEADER_LOGO_INSET);
        expect(center.x + center.width / 2).toBeCloseTo(pageWidth / 2, 0);
        expect(right.x + right.width).toBeCloseTo(pageWidth - HEADER_LOGO_INSET, 0);
        for (const item of placed) {
            expect(item.y).toBeGreaterThanOrEqual(HEADER_LOGO_BAND_TOP);
            expect(item.y + item.height).toBeLessThanOrEqual(HEADER_LOGO_BAND_TOP + HEADER_LOGO_BAND_HEIGHT);
        }
    });

    it('keeps several logos in the same slot inside the header', () => {
        const placed = placeHeaderLogos(
            [logo({ id: 'a', align: 'left' }), logo({ id: 'b', align: 'left', width: 100 })],
            pageWidth
        );
        expect(placed[0].x).toBe(HEADER_LOGO_INSET);
        expect(placed[1].x).toBeGreaterThan(placed[0].x + placed[0].width - 1);
        expect(placed[1].x + placed[1].width).toBeLessThanOrEqual(pageWidth - HEADER_LOGO_INSET);
    });
});

describe('headerLogoAlignAt', () => {
    it('reads the third of the page', () => {
        expect(headerLogoAlignAt(40, 794)).toBe('left');
        expect(headerLogoAlignAt(400, 794)).toBe('center');
        expect(headerLogoAlignAt(700, 794)).toBe('right');
    });
});

describe('placeCompanyLogos', () => {
    it('puts a footer logo in the bottom band', () => {
        const pageHeight = 1123;
        const placed = placeCompanyLogos(
            [logo({ id: 'foot', align: 'center', band: 'footer' })],
            794,
            pageHeight
        );
        const footer = placed[0];
        expect(footer.y).toBeGreaterThan(pageHeight / 2);
        expect(footer.y + footer.height).toBeLessThanOrEqual(pageHeight - HEADER_LOGO_BAND_TOP + 1);
    });
});

describe('fitHeaderLogoSize', () => {
    it('keeps the shape and stops at the header limit', () => {
        const grown = fitHeaderLogoSize(140, 44, 200);
        expect(grown.height).toBe(HEADER_LOGO_MAX_HEIGHT);
        expect(grown.width).toBeLessThanOrEqual(280);
        expect(grown.width / grown.height).toBeCloseTo(140 / 44, 1);
        const shrunk = fitHeaderLogoSize(140, 44, 4);
        expect(shrunk.height).toBe(HEADER_LOGO_MIN_HEIGHT);
    });
});
