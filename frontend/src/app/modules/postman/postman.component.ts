import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequestEditorComponent } from './request-editor/request-editor.component';
import { ResponseViewerComponent } from './response-viewer/response-viewer.component';

@Component({
  selector: 'app-postman',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RequestEditorComponent, ResponseViewerComponent],
  template: `
    <div class="flex h-screen w-full overflow-hidden bg-white dark:bg-slate-900 select-none">
      <!-- Sidebar -->
      <div
        class="flex-shrink-0 transition-all duration-300 ease-in-out h-full"
        [style.width.px]="sidebarWidth"
      >
        <postman-sidebar [collapsed]="sidebarCollapsed" (toggleCollapsed)="toggleSidebar()">
        </postman-sidebar>
      </div>

      <!-- Main Content -->
      <div
        class="flex-1 flex h-full min-w-0"
        (mousemove)="onDrag($event)"
        (mouseup)="stopDrag()"
        (mouseleave)="stopDrag()"
      >
        <!-- Request Editor -->
        <div class="h-full min-w-0" [style.width.%]="requestPanelWidth">
          <postman-request-editor></postman-request-editor>
        </div>

        <!-- Resizer Handle -->
        <div
          class="w-1 h-full cursor-col-resize hover:bg-blue-500 active:bg-blue-600 transition-colors bg-slate-200 dark:bg-slate-700 z-10"
          (mousedown)="startDrag()"
        ></div>

        <!-- Response Viewer -->
        <div class="flex-1 h-full min-w-0 border-l dark:border-slate-800">
          <postman-response-viewer></postman-response-viewer>
        </div>
      </div>
    </div>
  `,
})
export class PostmanComponent {
  sidebarCollapsed = false;
  sidebarWidth = 256; // w-64

  // Resizable Split
  requestPanelWidth = 50; // Percentage
  isDragging = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.sidebarWidth = this.sidebarCollapsed ? 64 : 256;
  }

  startDrag() {
    this.isDragging = true;
  }

  stopDrag() {
    this.isDragging = false;
  }

  onDrag(event: MouseEvent) {
    if (!this.isDragging) return;

    // Calculate new width percentage
    // We need the container width. Since "Main Content" is flex-1, its width varies.
    // But event.clientX is global.
    // The Request Editor starts after the sidebar.
    // So Width_Request_Editor = event.clientX - SidebarWidth

    const containerWidth = window.innerWidth - this.sidebarWidth;
    const newWidthPx = event.clientX - this.sidebarWidth;

    // Convert to percentage
    let newWidthPercent = (newWidthPx / containerWidth) * 100;

    // Clamp
    if (newWidthPercent < 20) newWidthPercent = 20;
    if (newWidthPercent > 80) newWidthPercent = 80;

    this.requestPanelWidth = newWidthPercent;
  }
}
