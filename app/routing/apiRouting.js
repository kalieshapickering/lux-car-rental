// module.exports = setAPI = function (appMod, pathMod, fsMod, momentMod) {
//     appMod.post("/api/clients", function (req, res) {
//         let fd;
//         let ln = "\n" + momentMod().format("x");
//         for (let i = 0; i <= Object.keys(req.body).length - 1; i++) {
//             let key = Object.keys(req.body)[i];
//             let val = req.body[key];
//             ln += "\n" + key + ": " + val;
//         }

//         try {
//             fd = fsMod.openSync(pathMod.join(__dirname, "..", "data", "clientbase.txt"), "a");
//             fsMod.appendFileSync(fd, ln + "\n", "utf8");
//         } catch(err) {
//             throw err;
//         } finally {
//             if (fd !== undefined) fsMod.closeSync(fd);
//             res.end();
//         }
//     });
// }