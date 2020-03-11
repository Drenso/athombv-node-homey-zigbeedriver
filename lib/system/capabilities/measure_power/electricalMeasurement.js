'use strict';

/**
 * Cluster capability configuration for `measure_power`.
 * @type {ClusterCapabilityConfiguration}
 */
module.exports = {
  get: 'instantaneousDemand',
  getOpts: {
    getOnStart: true,
  },
  report: 'instantaneousDemand',
  /**
   * @param {number} value
   * @returns {null|number}
   */
  reportParser(value) {
    const instantaneousDemandFactor = this.instantaneousDemandFactor || 1;
    if (value < 0) return null;
    const result = value / instantaneousDemandFactor;
    this.debug(`\`measure_power\` → reportParser → instantaneousDemand: ${value} → parsed:`, result);
    return result;
  },
};
