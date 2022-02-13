class UserFactory {
    constructor({ name, age, email, password }){
        this.name = name
        this.age = age
        this.email = email
        this.password = password
    }

    factory() {
        return {
            name: this.name,
            age: this.age,
            email: this.email,
            password: this.password
        }
    }
    
}

module.exports = UserFactory;