const db = require("../db/connection");

exports.checkTopicExists = (topic) => {
    return db
        .query("SELECT * FROM topics WHERE slug = $1", [topic])
        .then(({ rows }) => {
            if (rows.length === 0) {
                return Promise.reject({
                    status: 404,
                    msg: "404: Topic Not Found",
                });
            }
        });
};

exports.selectTopics = () => {
    return db.query("SELECT * FROM topics").then((response) => {
        return response.rows;
    });
};
