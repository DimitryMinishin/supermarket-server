const connection = require('./connection-wrapper')


// get all vacations
async function getAllProducts(){
    let sql = 'select name, price, category_id, quantity_in_stock, supplier_id from products';
    return await connection.execute(sql);

}

module.exports{
    getAllProducts
}