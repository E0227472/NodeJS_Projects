"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var feedController_1 = require("../controller/feedController");
exports.router = express_1.default.Router();
exports.router.get('/posts', feedController_1.getPosts);
exports.router.post('/posts', feedController_1.createPosts);
