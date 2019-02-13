"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthenticationController_1 = require("../controller/AuthenticationController");
var Utils_1 = require("../utils/Utils");
var AuthenticateRouter = /** @class */ (function () {
    function AuthenticateRouter() {
        this.authController = new AuthenticationController_1.default();
        this.router = express_1.Router();
        this.setRoutes();
    }
    AuthenticateRouter.prototype.setRoutes = function () {
        var _this = this;
        this.router
            .post('/', function (req, res) { return _this.authController.authenticate(req, res, Utils_1.default.getTokenKey()); });
    };
    return AuthenticateRouter;
}());
exports.default = new AuthenticateRouter().router;
//# sourceMappingURL=AuthenticateRouter.js.map