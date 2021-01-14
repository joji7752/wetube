import {videos} from "../db";

export const home = (req, res) => {
res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
     // const searchingBy = req.query.term; ECMAScript, ES6이전의 코딩방식
     const {query:{term : searchingBy}} = req;
     res.render("search", { pageTitle: "Search", searchingBy, videos });
}

export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });