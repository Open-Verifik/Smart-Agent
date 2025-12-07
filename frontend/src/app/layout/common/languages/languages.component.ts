import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
  FuseNavigationService,
  FuseVerticalNavigationComponent,
} from '@fuse/components/navigation';
import { AvailableLangs, TranslocoService } from '@jsverse/transloco';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'languages',
  templateUrl: './languages.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'languages',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, NgTemplateOutlet],
})
export class LanguagesComponent implements OnInit, OnDestroy {
  availableLangs: AvailableLangs;
  activeLang: string;
  flagCodes: any;
  private _isChangingLang = false;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseNavigationService: FuseNavigationService,
    private _translocoService: TranslocoService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Get the available languages from transloco
    this.availableLangs = this._translocoService.getAvailableLangs();

    // Set the country ISO codes for languages for flags
    this.flagCodes = {
      en: 'us',
      es: 'es',
      zh: 'cn',
      ko: 'kr',
      ja: 'jp',
      pt: 'br',
      fr: 'fr',
    };

    // Set initial active language
    const current = this._translocoService.getActiveLang();
    if (current) {
      this.activeLang = current;
    }

    // Subscribe to language changes
    this._translocoService.langChanges$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((activeLang) => {
        // Get the active lang
        this.activeLang = activeLang;

        // Update the navigation
        this._updateNavigation(activeLang);

        // Mark for check to update the UI
        this._changeDetectorRef.markForCheck();

        // Reset flag after language change completes
        this._isChangingLang = false;
      });

    // Ensure initial navigation is translated on first load
    if (current) {
      this._updateNavigation(current);
      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Set the active lang
   *
   * @param lang
   */
  setActiveLang(lang: string): void {
    // Prevent multiple simultaneous language changes
    if (this._isChangingLang || this.activeLang === lang) {
      return;
    }

    // Set flag to prevent multiple calls
    this._isChangingLang = true;

    // Persist selection FIRST
    try {
      localStorage.setItem('app.lang', lang);
    } catch (e) {
      // Error saving to localStorage - silently fail
    }

    // Get current active language to check if we need to change
    const currentLang = this._translocoService.getActiveLang();
    if (currentLang === lang) {
      this._isChangingLang = false;
      return;
    }

    // Set the active lang - Transloco will handle loading automatically
    // The load() method returns an Observable that completes when the language is loaded
    // We don't need to await it since setActiveLang will trigger the loading
    this._translocoService.setActiveLang(lang);

    // Mark for check to update the UI immediately
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Update the navigation
   *
   * @param lang
   * @private
   */
  private _updateNavigation(lang: string): void {
    // Get the component -> navigation data -> item
    const navComponent =
      this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');

    if (navComponent) {
      // Refresh the navigation component to trigger re-rendering with new translations
      // The navigation components already use the transloco pipe, so they will automatically
      // pick up the new language translations
      navComponent.refresh();
    }

    // Also try horizontal navigation (used by centered layout)
    const horizontalNavComponent = (this._fuseNavigationService as any).getComponent?.(
      'mainNavigation',
    );

    if (horizontalNavComponent && horizontalNavComponent.refresh) {
      horizontalNavComponent.refresh();
    }
  }
}
