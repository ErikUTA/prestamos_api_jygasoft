const conexion = require('./conexion');
const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();



const router = express.Router();
const cors =  require('cors');
const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', router);

router.use((req, res, next) => {    
    next();
})

app.listen(
    PORT, 
    () => console.log(`it's running on http:localhost:${PORT}`)
);

router.route('/listLoans').get((req, res) => {
    conexion.query("SELECT * FROM prestamos", (err, result, fields) => {
        if(!err){
            res.send(result);
        }else{
            res.send(err);
        }
    });
});

router.route('/insertLoan').post((req, res) => {
    conexion.query("INSERT INTO prestamos SET ?", req.body, (err, result, fields) => {
        if(!err){
            res.json(result);
        }else{
            res.send(err);
        }
    }); 
});

router.route('/updateLoan/:id').put((req, res) => {
    conexion.query(`UPDATE prestamos SET ? WHERE id = ${req.params.id}`, req.body, (err, result, fields) => {
        if(!err){
            res.json(result);
        }else{
            res.send(err);
        }
    }); 
});

router.route('/deleteLoan/:id').delete((req, res) => {
    conexion.query(`DELETE FROM prestamos WHERE id = ${req.params.id}`, (err, result, fields) => {
        if(!err){
            res.json(result);
        }else{
            res.send(err);
        }
    }); 
});