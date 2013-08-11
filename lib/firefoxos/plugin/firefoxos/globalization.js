/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

module.exports = {
    /**
     * Returns the ISO 639.1 two-letter code representing the language version of the browser|device
     */
    getPreferredLanguage: function(successCB, failureCB) {
        if ('language' in navigator && navigator.language) {
            successCB({ 'value' : navigator.language });
        } else {
            failureCB('[ERROR] Unable to query the device language settings');
        }
    },

    /**
     * XXX: The return value should be user's locale value.
     */
    getLocaleName: function(successCB, failureCB) {
        if ('language' in navigator && navigator.language) {
            successCB({ 'value' : navigator.language });
        } else {
            failureCB({'value': Globalization.UNKNOWN_ERROR});
        }
    },

    dateToString: function(date, successCB, failureCB, options) {
        var dateValue,
            formatLength = options.formatLength || 'short';

        switch(options.formatLength) {
            case 'short':
                dateValue = date.toLocaleDateString();
                break;
            default:
                dateValue = date.toLocaleString();
                break;
        }

        if (dateValue) {
            successCB({"value": dateValue});
        } else {
            failureCB(GlobalizationError.FORMATTING_ERROR);
        }
    }
};