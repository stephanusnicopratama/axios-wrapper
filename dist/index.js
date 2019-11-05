"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var config_1 = __importDefault(require("./config"));
var BaseApi = /** @class */ (function () {
    function BaseApi(baseUrl) {
        this.config = new config_1.default(baseUrl).getConfig();
        this.instance = axios_1.default.create(this.config);
    }
    return BaseApi;
}());
exports.default = BaseApi;
//# sourceMappingURL=index.js.map