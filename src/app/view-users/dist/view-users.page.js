"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
        while (_) try {
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
exports.__esModule = true;
exports.ViewUsersPage = void 0;
var core_1 = require("@angular/core");
var ViewUsersPage = /** @class */ (function () {
    function ViewUsersPage(afAuth, afStorage, afs, activatedRoute, afstore, afDB, authObj, media, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afStorage = afStorage;
        this.afs = afs;
        this.activatedRoute = activatedRoute;
        this.afstore = afstore;
        this.afDB = afDB;
        this.authObj = authObj;
        this.media = media;
        this.router = router;
        this.user = {};
        this.immagine = [];
        this.segment = 0;
        this.sliderOptions = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 400
        };
        this.imgURL = [];
        this.live = true;
        this.music = false;
        this.search = false;
        afs.collection('/Live Record').valueChanges()
            .subscribe(function (records) {
            _this.records = records;
            console.log(_this.records);
        });
        afs.collection('/Digital Record').valueChanges()
            .subscribe(function (songs) {
            _this.songs = songs;
            console.log(_this.songs);
        });
    }
    ViewUsersPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.records = this.records;
                return [2 /*return*/];
            });
        });
    };
    ViewUsersPage.prototype.initializeItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.records = [];
                return [2 /*return*/];
            });
        });
    };
    ViewUsersPage.prototype.filterList = function (evt) {
        this.initializeItems();
        var val = evt.target.value;
        if (val && val.trim() !== '') {
            this.search = true;
            this.records = this.records.filter(function (record) {
                return (record.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.search = false;
        }
    };
    ViewUsersPage.prototype.segmentChanged = function (event) {
        var segment = event.target.value;
        if (segment == "Live") {
            this.live = true;
            this.music = false;
            this.search = false;
        }
        else if (segment == "Music") {
            this.live = false;
            this.music = true;
            this.search = false;
        }
        else if (segment == "Search") {
            this.live = false;
            this.music = false;
            this.search = true;
        }
    };
    ViewUsersPage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afAuth.signOut()];
                    case 1:
                        _a.sent();
                        this.router.navigateByUrl('/login-register');
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewUsersPage = __decorate([
        core_1.Component({
            selector: "app-view-users",
            templateUrl: "./view-users.page.html",
            styleUrls: ["./view-users.page.scss"]
        })
    ], ViewUsersPage);
    return ViewUsersPage;
}());
exports.ViewUsersPage = ViewUsersPage;
