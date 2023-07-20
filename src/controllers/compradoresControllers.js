const controller= {};

controller.list= (req, res)  =>{
    req.getConnection((err, conn) => {
        conn.query(" SELECT * From compradores", (err, compradores)=>{
            if (err){
                res.json(err);
            }
            res.render("customers", {
                data:compradores
            });
        });
    });
};

controller.save= (req,res)=> {
    const data= req.body;
    req.getConnection((err, conn) => {
        conn.query(" INSERT INTO compradores set ?", [data], (err, customer)=>
        //aca le digo al servidor que cuando se agregue un nuevo dato se mantenga en la pagina principal
                res.redirect("/");
        )
    })
}
controller.edit=(req, res)=> {
    const{id}= req.params;
    req,getConnection((err,conn)=>{
        conn.query("SELECT FROM compradores WHERE ID= ?", [id], (err, customer)=> {
            res.render("customer_edit", {
                data:customer[0]
            })
        })
    })
}

controller.update= (req,res) =>{
const{id}= req.params;
const newCustomer= req.body;
req.getConnection((err, conn)=>{
    conn.query("UPDATE compradores set ? WHERE id =?", [newCustomer,id],(err, rows)=>{
        res.redirect("/");
    })
})

}

controller.delete= (req,res)=> {

    const{id}=req.params;
    req.getConnection((err, conn)=>{
conn.query("DELETE FROM compradores WHERE id= ?", [id], (err, rows) =>{

})
    }    )

};
    
module.exports= controller