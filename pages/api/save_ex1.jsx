import { NextApiRequest, NextApiResponse } from "next";
const db = require("../../db/db");

export default function save(req, res) {
    // console.log(req.body.name);
    // console.log(req.body);
    db.query(
        "insert into rite.t_test_result_ex1 (name, school, result01, result02, result03, result04, result05, result06, result07, result08, result09, result10, class, comment, reg_date, exam_typ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,SYSDATE(),'EX1')",
        [
            req.body.name,
            req.body.school,
            req.body.result01,
            req.body.result02,
            req.body.result03,
            req.body.result04,
            req.body.result05,
            req.body.result06,
            req.body.result07,
            req.body.result08,
            req.body.result09,
            req.body.result10,
            req.body.result_class,
            req.body.comment,
        ],
        function (err, result) {
            if (err) {
                console.log(err);
                // console.log(req.body);
            } else {
                // console.log(result);
                res.json(result);
            }
        },
    );
}
