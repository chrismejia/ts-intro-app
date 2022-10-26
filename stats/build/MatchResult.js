"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchResult = void 0;
/**
 * `enum` represent all string/number possibilities. enum props can be accessed like object values via dot-notation. They cannot be edited externally (via network request, etc.) They need to be defined at code time.
 */
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
