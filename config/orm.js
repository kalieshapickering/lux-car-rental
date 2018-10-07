var con = require("./connection"),
    orm = {
        selectAll: function (callback) {
            con.query("SELECT * FROM posts", function (err, result) {
                if (err) throw err;
                con.end();
                if (callback) {
                    return callback(result);
                }
            });
        },

        insert: function (address, sent, recieved, firstName, lastName, vehicle, start, end, callback) {
            con.query("INSERT INTO posts (req_loc, sent_ts, recieved_ts, first_name, last_name, vehicle, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?", [address, sent, recieved, firstName, lastName, vehicle, start, end], function(err, result) {
                if (err) throw err;
                con.end();
                if (callback) {
                    return callback(result);
                }
            });
        },

        update: function (colToUpdate, valueToUpdate, conditionalCol, conditionalVal) {
            if (colToUpdate.contructor === Array && valueToUpdate === Array) {
                
            }
            con.query("UPDATE posts SET ? = ? WHERE ")
        }
    };