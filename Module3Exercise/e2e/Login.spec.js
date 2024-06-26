"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
(0, test_1.test)('Authenticate Method', function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var postRequest, _c, _d, _e, _f, _g, statusCode;
    var request = _b.request;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0: return [4 /*yield*/, request.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {
                    data: {
                        "email": "danlam2000@slkdskld.com",
                        "password": "$Password1"
                    }
                })];
            case 1:
                postRequest = _h.sent();
                //This logs out the response to the console
                _d = (_c = console).log;
                _e = "Post response body --> ";
                _g = (_f = JSON).stringify;
                return [4 /*yield*/, postRequest.json()];
            case 2:
                //This logs out the response to the console
                _d.apply(_c, [_e + _g.apply(_f, [_h.sent(), null, 2])]);
                return [4 /*yield*/, postRequest.status()];
            case 3:
                statusCode = _h.sent();
                console.log("Post response status code --> " + statusCode);
                return [4 /*yield*/, (0, test_1.expect)(statusCode).toEqual(200)];
            case 4:
                _h.sent();
                console.log("Post response status code --> " + postRequest.ok());
                return [4 /*yield*/, (0, test_1.expect)(postRequest.ok()).toBeTruthy()];
            case 5:
                _h.sent();
                return [2 /*return*/];
        }
    });
}); });
