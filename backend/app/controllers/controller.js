'use strict';

var response = require('../../res');
var connection = require('../connection/conn');

exports.propinsi = function(req, res) {
    connection.query('SELECT * FROM list_propinsi', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.addListPropinsi = function(req, res) {
    
    var id_propinsi = req.body.id_propinsi;
    var nama_propinsi = req.body.nama_propinsi;

    connection.query('INSERT INTO list_propinsi (id_propinsi, nama_propinsi) values (?,?)',
    [ id_propinsi, nama_propinsi ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Success,Data has been saved!", res)
        }
    });
};


exports.kontrasepsi = function(req, res) {
    connection.query('SELECT * FROM list_kontrasepsi', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.addListKontrasepsi = function(req, res) {
    
    var id_kontrasepsi = req.body.id_kontrasepsi;
    var nama_kontrasepsi = req.body.nama_kontrasepsi;

    connection.query('INSERT INTO list_kontrasepsi (id_kontrasepsi, nama_kontrasepsi) values (?,?)',
    [ id_kontrasepsi, nama_kontrasepsi ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Success,Data has been saved!", res)
        }
    });
};

exports.pemakaiKontrasepsi = function(req, res) {
    connection.query('SELECT * FROM list_pemakai_kontrasepsi', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.addListPemakaiKontrasepsi = function(req, res) {
    
    var id = req.body.id;
    var id_kontrasepsi = req.body.id_kontrasepsi;
    var id_propinsi = req.body.id_propinsi;
    var jumlah_pemakai = req.body.jumlah_pemakai;

    connection.query('INSERT INTO list_pemakai_kontrasepsi (id, id_kontrasepsi, id_propinsi, jumlah_pemakai) values (?,?)',
    [ id, id_kontrasepsi, id_propinsi, jumlah_pemakai ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Success,Data has been saved!", res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Data List Keluarga Berencana", res)
};