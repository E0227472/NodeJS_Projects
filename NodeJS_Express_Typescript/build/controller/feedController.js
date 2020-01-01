"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Posts_1 = require("../data/Posts");
/* psuedo getting data from the database */
exports.getPosts = function (req, res, next) {
    res.status(201).json({
        posts: Posts_1.posts
    });
};
/* psuedo posting data to the database */
exports.createPosts = function (req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    res.status(201).json({
        post: { title: title, content: content }
    });
};
