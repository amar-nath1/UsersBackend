
const db=require('../util/database')

class User{
    username
    phone
    email
    constructor(obj){
        this.username=obj.username
        this.phone=obj.mobileNumber
        this.email=obj.email
    }

    save(){
        return db.execute(`INSERT INTO users (username,phone_number,email)
        values ('${this.username}','${this.phone}','${this.email}')
        `)

    }

    editUser(id){
        return db.execute(`UPDATE users SET username='${this.username}',phone_number='${this.phone}',email='${this.email}' WHERE id=${id}`)

    }

    static fetchAll(){
        return db.execute('SELECT * FROM users')
    
}

static deleteItem(id){
    return db.execute(`DELETE FROM users WHERE id = ${id}`)

}
}

module.exports=User