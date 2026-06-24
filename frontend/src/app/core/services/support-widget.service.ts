import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';

const WIDGET_SCRIPT_ID = 'veri-widget-script';
const WIDGET_SCRIPT_SRC = 'https://verifik-ai-agent.web.app/veri-widget.js';
const WIDGET_CHANNEL = 'verifik_co';
const WIDGET_IFRAME_TITLE = 'Veri — Verifik AI';

type WidgetLocale = 'en' | 'es';

declare global {
    interface Window {
        __veriWidgetLoaded?: boolean;
    }
}

/**
 * Loads the Verifik AI support chat bubble inside the authenticated app shell.
 */
@Injectable({
    providedIn: 'root',
})
export class SupportWidgetService {
    private _mounted = false;
    private _currentLocale: WidgetLocale = 'en';
    private _langChangesSub?: Subscription;

    constructor(
        @Inject(DOCUMENT) private _document: Document,
        private _translocoService: TranslocoService
    ) {}

    /**
     * Mounts the support widget and keeps locale in sync with Transloco.
     */
    mount(): void {
        if (this._mounted) {
            return;
        }

        this._currentLocale = this._mapLocale(this._translocoService.getActiveLang());
        this._injectScript(this._currentLocale);
        this._mounted = true;

        this._langChangesSub = this._translocoService.langChanges$.subscribe((lang) => {
            const nextLocale = this._mapLocale(lang);

            if (nextLocale === this._currentLocale) {
                return;
            }

            this._currentLocale = nextLocale;
            this._reload(nextLocale);
        });
    }

    /**
     * Removes the widget and unsubscribes from language changes.
     */
    destroy(): void {
        this._langChangesSub?.unsubscribe();
        this._langChangesSub = undefined;
        this._teardown();
        this._mounted = false;
    }

    /**
     * Maps Transloco language codes to widget-supported locales.
     */
    private _mapLocale(lang: string | null | undefined): WidgetLocale {
        return lang === 'es' ? 'es' : 'en';
    }

    /**
     * Reloads the widget with a new locale.
     */
    private _reload(locale: WidgetLocale): void {
        this._teardown();
        this._injectScript(locale);
    }

    /**
     * Injects the widget loader script tag.
     */
    private _injectScript(locale: WidgetLocale): void {
        if (this._document.getElementById(WIDGET_SCRIPT_ID)) {
            return;
        }

        const script = this._document.createElement('script');
        script.id = WIDGET_SCRIPT_ID;
        script.src = WIDGET_SCRIPT_SRC;
        script.defer = true;
        script.setAttribute('data-channel', WIDGET_CHANNEL);
        script.setAttribute('data-locale', locale);
        this._document.body.appendChild(script);
    }

    /**
     * Removes the widget iframe and script, resetting the loader guard.
     */
    private _teardown(): void {
        this._removeWidgetIframe();
        this._removeWidgetScript();
        window.__veriWidgetLoaded = false;
    }

    /**
     * Removes the widget iframe from the DOM.
     */
    private _removeWidgetIframe(): void {
        const iframeByTitle = this._document.querySelector(
            `iframe[title="${WIDGET_IFRAME_TITLE}"]`
        );

        iframeByTitle?.remove();

        if (iframeByTitle) {
            return;
        }

        this._document.querySelector('iframe[src*="/embed"]')?.remove();
    }

    /**
     * Removes the widget script tag from the DOM.
     */
    private _removeWidgetScript(): void {
        this._document.getElementById(WIDGET_SCRIPT_ID)?.remove();
    }
}
