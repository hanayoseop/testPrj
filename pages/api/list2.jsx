import { NextApiRequest, NextApiResponse } from "next";
const db = require("../../db/db");

export default function list2(req, res) {
    console.log(req.body);
    db.query(
        "SELECT * FROM rite.t_test_result_ex1 where no = ?",
        [req.query.id],
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                // console.log(req.body.id);
                // console.log("123");
                // console.log(result);
                res.json(result);
                // return result;
            }
        },
    );
}
