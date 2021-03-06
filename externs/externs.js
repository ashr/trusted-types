/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */

/** @fileoverview @externs */

/**
 * Policy defining rules for creating Trusted Types.
 * @typedef {TrustedTypesInnerPolicy}
 */
var TrustedTypesInnerPolicy = {
  /**
   * Function defining rules for creating a TrustedHTML object.
   * @param  {string} s The input string.
   * @return {string} String that will be wrapped in a TrustedHTML object.
   */
  createHTML(s){},

  /**
   * Function defining rules for creating a TrustedURL object.
   * @param  {string} s The input string.
   * @return {string} String that will be wrapped in a TrustedURL object.
   */
  createURL(s){},

  /**
   * Function defining rules for creating a TrustedScriptURL object.
   * @param  {string} s The input string.
   * @return {string} String that will be wrapped in a TrustedScriptURL object.
   */
  createScriptURL(s){},

  /**
   * Function defining rules for creating a TrustedScript object.
   * @param  {string} s The input string.
   * @return {string} String that will be wrapped in a TrustedScript object.
   */
  createScript(s){},

  /**
   * Iff set to true, the policy will be exposed (available globally).
   * @type {boolean}
   */
  expose: false,
};

/**
 * @const
 */
var TrustedTypes;

/**
 * Creates a TT policy.
 *
 * Returns a frozen object representing a policy - a collection of functions
 * that may create TT objects based on the user-provided rules specified
 * in the builder function.
 *
 * @param  {string} name A unique name of the policy.
 * @param  {!function(TrustedTypesInnerPolicy)} builder Function that defines
 *   policy rules by modifying the initial policy object passed.
 * @return {!TrustedTypesPolicy} The policy that may create TT objects
 *   according to the rules in the builder.
 */
TrustedTypes.createPolicy = function(name, builder){};

/**
 * Return a Policy object, if the policy was defined and exposed.
 * @param  {string} name The name of the policy.
 * @return {?TrustedTypesPolicy}
 */
TrustedTypes.getExposedPolicy = function(name){};

/**
 * Returns all defined policy names.
 * @return {!Array<string>}
 */
TrustedTypes.getPolicyNames = function(){};

/**
 * Object that represents a Trusted HTML code, safe to be inserted into DOM into
 * HTML context.
 * @constructor
 */
TrustedTypes.TrustedHTML = function() {};

/**
 * Object that represents a Trusted URL, safe to be inserted into DOM in
 * URL context.
 * @constructor
 */
TrustedTypes.TrustedURL = function() {};

/**
 * Object that represents a Trusted Script URL, safe to be inserted into DOM as
 * a script URL.
 * @constructor
 */
TrustedTypes.TrustedScriptURL = function() {};

/**
 * Object that represents a Trusted JavaScript code string, safe to be executed.
 * @constructor
 */
TrustedTypes.TrustedScript = function() {};

/**
 * Policy allowing to create Trusted Types.
 * @constructor
 */
var TrustedTypesPolicy = function() {};

/**
 * Creates a TrustedHTML object from a string.
 * @param  {string} s Input string
 * @return {!TrustedTypes.TrustedHTML}
 */
TrustedTypesPolicy.prototype.createHTML = function(s) {};

/**
 * Creates a TrustedURL object from a string.
 * @param  {string} s Input string
 * @return {!TrustedTypes.TrustedURL}
 */
TrustedTypesPolicy.prototype.createURL = function(s) {};

/**
 * Creates a TrustedScriptURL object from a string.
 * @param  {string} s Input string
 * @return {!TrustedTypes.TrustedScriptURL}
 */
TrustedTypesPolicy.prototype.createScriptURL = function(s) {};

/**
 * Creates a TrustedScript object from a string.
 * @param  {string} s Input string
 * @return {!TrustedTypes.TrustedScript}
 */
TrustedTypesPolicy.prototype.createScript = function(s) {};
