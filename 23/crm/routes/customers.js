module.exports.all = function (req, res) {
    res.getConnection(function (err, connection) {
        connection.query('SELECT * FROM customers', function (err, rows) {
            if (err) throw new Error;
            res.render('customers', {page_title: 'IMT-CRM Users', data: rows});
        });
    });
};

module.exports.add = function (req, res) {
    res.render('add_customer', {page_title: 'Add User'});
};

module.exports.edit = function (req, res) {
    let id = req.params.id;
    res.getConnection(function (err, connection) {
        connection.query('INSERT INTO customers SET ?', [data], function (err, rows) {
            if (err) throw new Error;
            res.render('edit_customer', {page_title: 'Edit User', data: rows});
        });
    });
};

module.exports.edit_save = function (req, res) {
    let input = req.body;
    res.getConnection(function (err, connection) {
        let data = {
            name: input.name,
            address: input.address,
            email: input.email,
            phone: input.phone
        };
        connection.query('UPDATE customers SET ? WHERE id = ', [data, id], function (err, rows) {
            if (err) throw new Error;
            res.redirect('/customers');
        });
    });
};

module.exports.delete = function (req, res) {
    let id = req.params.id;
    req.getConnection(function (err, connection) {
        connection.query('DELETE FROM customers WHERE id = ?', [id], function (err, rows) {
            if (err) throw new Error;
            res.redirect('/customers');
        });
    });
};