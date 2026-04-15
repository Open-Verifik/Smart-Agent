import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@jsverse/transloco';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface LinkProjectDialogData {
    projects: any[];
    currentWebhookId: string;
}

@Component({
    selector: 'link-project-dialog',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TranslocoModule, MatDialogModule, MatButtonModule, MatIconModule],
    templateUrl: './link-project-dialog.component.html',
    styleUrls: ['./link-project-dialog.component.scss'],
})
export class LinkProjectDialogComponent implements OnInit {
    private _dialogRef = inject(MatDialogRef<LinkProjectDialogComponent>);

    searchControl = new FormControl('');
    filteredProjects: any[] = [];
    allProjects: any[] = [];
    selectedProject: any = null;

    constructor(@Inject(MAT_DIALOG_DATA) public data: LinkProjectDialogData) {
        const wid = this.data.currentWebhookId;
        this.allProjects = this.data.projects.filter((p) => {
            const wh = p.webhook;
            const whId = typeof wh === 'string' ? wh : wh?._id;
            return !wh || whId !== wid;
        });
        this.filteredProjects = this.allProjects;
    }

    ngOnInit(): void {
        this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged()).subscribe((value) => {
            this.filterProjects((value || '').toLowerCase());
        });
    }

    filterProjects(value: string): void {
        this.filteredProjects = this.allProjects.filter(
            (option) =>
                option.project?.name?.toLowerCase().includes(value) || option.type?.toLowerCase().includes(value)
        );
    }

    selectProject(project: any): void {
        this.selectedProject = project;
    }

    close(): void {
        this._dialogRef.close();
    }

    add(): void {
        if (this.selectedProject) {
            this._dialogRef.close(this.selectedProject);
        }
    }
}
