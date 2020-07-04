'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/controller');

    app.route('/')
        .get(todoList.index);

    app.route('/kontrasepsi')
        .get(todoList.kontrasepsi);
    
    app.route('/kontrasepsi')
        .post(todoList.addListKontrasepsi);
    
    app.route('/propinsi')
        .get(todoList.propinsi);
    
    app.route('/propinsi')
        .post(todoList.addListPropinsi);
    
    app.route('/pemakaiKontrasepsi')
        .get(todoList.pemakaiKontrasepsi);
    
    app.route('/pemakaiKontrasepsi')
        .post(todoList.addListPemakaiKontrasepsi);
};