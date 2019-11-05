"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config(baseURL) {
        this.config = {};
        this.config.baseURL = baseURL;
    }
    Config.prototype.getConfig = function () {
        return this.config;
    };
    return Config;
}());
exports.default = Config;
//# sourceMappingURL=index.js.map