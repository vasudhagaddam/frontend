const express = require('express')
const app = express()

app.get('/home', loadStudentsHtml);
app.get('/addr',addr);
app.get('/adds',adds);


app.listen(4000, () => console.log(`Example app listening on port 4000!`))

function loadStudentsHtml(req, res) {
    console.log(__dirname);
    res.sendFile('ShowPage.html',{ root: __dirname });
}
function addr(req, res) {
    console.log(__dirname);
    res.sendFile('student.html',{ root: __dirname });
}
function adds(req, res) {
    console.log(__dirname);
    res.sendFile('subjects.html',{ root: __dirname });
}


