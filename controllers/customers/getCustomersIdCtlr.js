import db from "../../db/db.js"

async function getCustomersIdCtlr(req,res) {
    const {id} = req.params;

  try {

    const queryCustomer = await db.query(
      `
    SELECT * FROM customers WHERE id = $1
    `,
      [id]
    );

    const customer = queryCustomer.rows;
    if(!customer[0]) {
      return res.sendStatus(404)
    }
    res.send(customer);
  } catch (e) {
    console.log(e)
    res.sendStatus(500);
  }
}
export default getCustomersIdCtlr;