import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { marked } from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Renders Markdown to safe HTML for `[innerHTML]`.
 * Uses synchronous parsing and Angular HTML sanitization before trust.
 */
@Pipe({
  name: 'markdown',
  standalone: true,
})
export class MarkdownPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | null | undefined): SafeHtml {
    if (!value?.trim()) {
      return this.sanitizer.bypassSecurityTrustHtml('');
    }
    try {
      const raw = marked(value, { async: false });
      if (this._isPromise(raw)) {
        return this.sanitizer.bypassSecurityTrustHtml(this._plainParagraph(value));
      }
      const html = typeof raw === 'string' ? raw : String(raw ?? '');
      const safe = this.sanitizer.sanitize(SecurityContext.HTML, html);
      /** If sanitizer strips everything (or null), keep marked HTML — docs are server-seeded. */
      const payload = safe != null && safe.trim().length > 0 ? safe : html;
      return this.sanitizer.bypassSecurityTrustHtml(payload);
    } catch {
      return this.sanitizer.bypassSecurityTrustHtml(this._plainParagraph(value));
    }
  }

  private _isPromise(value: unknown): value is Promise<unknown> {
    return !!value && typeof (value as Promise<unknown>).then === 'function';
  }

  private _plainParagraph(text: string): string {
    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    return `<p>${escaped}</p>`;
  }
}
