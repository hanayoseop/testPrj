import { NextApiRequest, NextApiResponse } from "next";
const db = require("../../db/db");

export default function test(req, res) {
    console.log(req.body.name);
    db.query(
        "insert into t_test_result_ex1 (name, school, result01) values (?,?)",
        [req.body.name, req.body.name2],
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.json(result);
            }
        },
    );
}
