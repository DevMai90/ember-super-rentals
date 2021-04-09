import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const TWEET_INTENT = 'https://twitter.com/intent/tweet';

export default class ShareButtonComponent extends Component {
  @service router;

  get currentUrl() {
    // Must use router service instead of accessing window object directly. It is the router that controls URL transitions. The router uses logical URLS (not absolute)
    // return window.location.href;

    /**
     * currentURL provides current relative URL as seen by Ember.
     * window.location.origin helps create an absolute URL.
     */
    return new URL(this.router.currentURL, window.location.origin);
  }

  get shareUrl() {
    const url = new URL(TWEET_INTENT);

    url.searchParams.set('url', this.currentUrl);

    if (this.args.text) {
      url.searchParams.set('text', this.args.text);
    }

    if (this.args.hashtags) {
      url.searchParams.set('hashtags', this.args.hashtags);
    }

    if (this.args.via) {
      url.searchParams.set('via', this.args.via)
    }

    return url;
  }
}
