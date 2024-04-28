import bcrypt from 'bcryptjs'


let password = 'Hello World'

// const salt = await bcrypt.genSalt(10)
// const salt = '$2a$10$bFB6N4gqYiRllTwmSv2HUu'
// console.log(salt)
// const hash = await bcrypt.hash(password, salt)

// console.log("password",password)
// console.log("hash",hash)

let confirmPassword = 'Hello Worlds'
let hashedPassword = `$2a$10$eNFQiYRCUOjh4ZIfaXN0CeJ/YAkHDkm4wJuKD7NgUyutwx2F92gYi`
let result = await bcrypt.compare(confirmPassword, hashedPassword)
console.log(result)