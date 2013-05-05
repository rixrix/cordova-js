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

var globalization = require('cordova/plugin/globalization'),
    GlobalizationError = require('cordova/plugin/GlobalizationError');

module.exports = {
    getPreferredLanguage: function(successCB, failureCB) {
        var lock = navigator.mozSettings.createLock(),
            setting = lock.get('language.current');

        setting.onsuccess = function() {
            successCB(setting.result);
        }

        setting.onerror = function() {
            failureCB(setting.error);
        }
    },

    getLocaleName:function(successCB, failureCB) {
        var locale = navigator.language || false;

        if (locale) {
            successCB(locale);
        } else {
            failureCB(false);
        }
    }
}