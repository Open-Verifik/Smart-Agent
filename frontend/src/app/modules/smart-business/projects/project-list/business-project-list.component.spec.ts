import '@angular/compiler';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { of, throwError } from 'rxjs';
import { BusinessProjectListComponent } from './business-project-list.component';
import type { BusinessProject } from '../../smart-business.types';

describe('BusinessProjectListComponent', () => {
    let component: BusinessProjectListComponent;
    let routerMock: any;
    let businessServiceMock: any;
    let translocoMock: any;
    let clipboardMock: any;
    let snackBarMock: any;

    const mockProjects: BusinessProject[] = [
        {
            _id: 'biz_01',
            name: 'Acme Corp',
            status: 'active',
            updatedAt: '2026-11-01T12:00:00Z',
            projectFlows: [
                {
                    _id: 'flow_01',
                    name: 'Main Flow',
                    status: 'active',
                    onboardingSettings: { verifyStyle: 'b' },
                },
            ],
            currentStep: 6,
            lastStep: 6,
        },
        {
            _id: 'biz_02',
            name: 'Beta Incomplete Corp',
            status: 'inactive',
            updatedAt: '2026-11-02T12:00:00Z',
            projectFlows: [
                {
                    _id: 'flow_02',
                    name: 'Draft Flow',
                    status: 'inactive',
                    onboardingSettings: { verifyStyle: 'c' },
                },
            ],
            currentStep: 3,
            lastStep: 3,
        },
    ];

    beforeEach(() => {
        routerMock = {
            navigate: vi.fn().mockResolvedValue(true),
        };
        businessServiceMock = {
            listProjects: vi.fn().mockReturnValue(of(mockProjects)),
            updateProject: vi.fn().mockReturnValue(of({ success: true })),
            updateProjectFlow: vi.fn().mockReturnValue(of({ success: true })),
        };
        translocoMock = {
            translate: vi.fn((key: string) => key),
            getActiveLang: vi.fn().mockReturnValue('en'),
        };
        clipboardMock = {
            copy: vi.fn().mockReturnValue(true),
        };
        snackBarMock = {
            open: vi.fn(),
        };

        component = new BusinessProjectListComponent(
            routerMock,
            businessServiceMock,
            translocoMock,
            clipboardMock,
            snackBarMock
        );
    });

    it('should create and load projects on init', () => {
        expect(component).toBeTruthy();
        component.ngOnInit();
        expect(businessServiceMock.listProjects).toHaveBeenCalled();
        expect(component.projects().length).toBe(2);
        expect(component.loading()).toBe(false);
        expect(component.error()).toBeNull();
    });

    it('should set error state if listProjects fails', () => {
        businessServiceMock.listProjects.mockReturnValue(throwError(() => new Error('Network error')));
        component.ngOnInit();
        expect(component.loading()).toBe(false);
        expect(component.error()).toBe('smartBusiness.list.loadError');
        expect(component.projects().length).toBe(0);
    });

    it('should navigate to setup wizard on createProject', () => {
        component.createProject();
        expect(routerMock.navigate).toHaveBeenCalledWith([
            '/smart-business/projects',
            'new',
            'setup',
            '0',
        ]);
    });

    it('should navigate to project detail on openProject', () => {
        const event = { stopPropagation: vi.fn() } as any;
        component.openProject(mockProjects[0], event);
        expect(event.stopPropagation).toHaveBeenCalled();
        expect(routerMock.navigate).toHaveBeenCalledWith([
            '/smart-business/projects',
            'biz_01',
        ]);
    });

    it('should resume incomplete draft setup on openProjectOrResume', () => {
        const event = { stopPropagation: vi.fn() } as any;
        component.openProjectOrResume(mockProjects[1], event);
        expect(routerMock.navigate).toHaveBeenCalledWith([
            '/smart-business/projects',
            'biz_02',
            'setup',
            3,
        ]);
    });

    it('should open project detail when project is complete on openProjectOrResume', () => {
        const event = { stopPropagation: vi.fn() } as any;
        component.openProjectOrResume(mockProjects[0], event);
        expect(routerMock.navigate).toHaveBeenCalledWith([
            '/smart-business/projects',
            'biz_01',
        ]);
    });

    it('should navigate to specific section query param on openSection', () => {
        const event = { stopPropagation: vi.fn() } as any;
        component.openSection(mockProjects[0], 'api', event);
        expect(event.stopPropagation).toHaveBeenCalled();
        expect(routerMock.navigate).toHaveBeenCalledWith(
            ['/smart-business/projects', 'biz_01'],
            { queryParams: { section: 'api' } }
        );
    });

    it('should return verifyStyle of active flow or fallback to a', () => {
        expect(component.getStyleId(mockProjects[0])).toBe('b');
        expect(component.getStyleId(mockProjects[1])).toBe('c');
        expect(component.getStyleId({} as any)).toBe('a');
    });

    it('should toggle project status and sync active flow', () => {
        component.ngOnInit();
        const toggleEvent = {
            checked: false,
            source: { checked: false },
        } as any;

        component.onStatusToggle(toggleEvent, mockProjects[0]);
        expect(businessServiceMock.updateProject).toHaveBeenCalledWith('biz_01', { status: 'draft' });
        expect(businessServiceMock.updateProjectFlow).toHaveBeenCalledWith('flow_01', { status: 'draft' });
        expect(mockProjects[0].status).toBe('draft');
    });

    it('should revert project status and toggle switch if status update fails', () => {
        component.ngOnInit();
        mockProjects[0].status = 'active';
        businessServiceMock.updateProject.mockReturnValue(throwError(() => new Error('API failure')));
        const toggleEvent = {
            checked: false,
            source: { checked: false },
        } as any;

        component.onStatusToggle(toggleEvent, mockProjects[0]);
        expect(mockProjects[0].status).toBe('active');
        expect(toggleEvent.source.checked).toBe(true);
    });

    it('should copy live verification URL to clipboard', () => {
        const event = { stopPropagation: vi.fn() } as any;
        component.copyLiveUrl(mockProjects[0], event);
        expect(event.stopPropagation).toHaveBeenCalled();
        expect(clipboardMock.copy).toHaveBeenCalledWith(expect.stringContaining('biz_01'));
        expect(snackBarMock.open).toHaveBeenCalled();
    });
});
