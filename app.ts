import { AnalyticsBrowser } from "@segment/analytics-next";

class SegmentController {
  private _analytics;
  constructor() {
    this._analytics = AnalyticsBrowser.load({
      writeKey: "xxxx",
    });
  }

  /**
   * Shutdown the tracking (for saving session when needed)
   */
  shutdown() {
    this._analytics?.off("Shutdown", () => {});
  }
}

new SegmentController();
