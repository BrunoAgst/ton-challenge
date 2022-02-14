class UserFactory {
    constructor({ name, age, email, tax_id }){
        this.name = name
        this.age = age
        this.email = email
        this.tax_id = tax_id
    }

    RequestFactory() {
        return {
            name: this.name,
            age: this.age,
            email: this.email,
            tax_id: this.tax_id
        }
    }

    ResponseFactory(){
        return {
            name: this.name,
            age: this.age,
            email: this.email,
            tax_id: this.tax_id
        }
    }
    
}

module.exports = UserFactory;