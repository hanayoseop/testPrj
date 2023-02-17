import { NextApiRequest, NextApiResponse } from "next";
const db = require("../../db/db");

export default function save(req, res) {
    // console.log(req.body.name);
    // console.log(req.body);
    db.query(
        "insert into rite.t_test_result_ex1 (name, school, result01, result02, result03, result04, result05, result06, result07, result08, result09, result10, result11, result12, result13, result14, result15, result16, result17, result18, class, comment, reg_date, exam_typ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,SYSDATE(),'EX2')",
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
            req.body.result11,
            req.body.result12,
            req.body.result13,
            req.body.result14,
            req.body.result15,
            req.body.result16,
            req.body.result17,
            req.body.result18,
            req.body.result_class,
            req.body.comment,
        ],
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                // console.log(result);
                res.json(result);
            }
        },
    );
}
