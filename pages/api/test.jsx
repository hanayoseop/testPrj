import { NextApiRequest, NextApiResponse } from "next";
const db = require("../../db/db");

export default function test(req, res) {
    db.query(
        "SELECT no as id, exam_typ, concat(name, ' || ', school) as name, reg_date FROM rite.t_test_result_ex1 ORDER BY no desc",
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                // console.log("123");
                // console.log(result);
                res.json(result);
                // return result;
            }
        },
    );
}
