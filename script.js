let full_name = document.getElementById("full_name")
let user_name = document.getElementById("user_name")
let phone_number = document.getElementById("phone_number")
let Bio = document.getElementById("Bio")
let Submit_Button = document.getElementById("Submit_Button")


// Full Name Validation
let isNameValid = () => {

    let f_name = full_name.value.trim()

    if (f_name.length < 3) {
        return false
    }

    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    for (let i = 0; i < numbers.length; i++) {

        if (f_name.includes(numbers[i])) {
            return false
        }

    }

    return true

}


// Username Validation
let isUsernameValid = () => {

    let u_name = user_name.value.trim()

    if (u_name.length < 5 || u_name.length > 15) {
        return false
    }

    if (u_name.includes(" ")) {
        return false
    }

    return true

}


// Phone Number Validation
let isPhoneValid = () => {

    let p_number = phone_number.value.trim()

    if (p_number.length != 11) {
        return false
    }

    if (!p_number.startsWith("03")) {
        return false
    }

    if (isNaN(p_number)) {
        return false
    }

    return true

}


// Bio Validation
let isBioValid = () => {

    let bio_area = Bio.value.trim()

    if (bio_area.length < 50) {
        return false
    }

    let words = bio_area.split(" ")

    if (words.length < 10) {
        return false
    }

    return true

}


// Form Validation
let formValid = () => {

    if (!isNameValid()) {
        alert("Full Name is Invalid")
    }

    else if (!isUsernameValid()) {
        alert("Username is Invalid")
    }

    else if (!isPhoneValid()) {
        alert("Phone Number is Invalid")
    }

    else if (!isBioValid()) {
        alert("Bio is Invalid")
    }

    else {
        alert("Signup Successful!")
    }

}


Submit_Button.addEventListener("click", formValid)


// Bonus: Username automatically converts to lowercase
user_name.addEventListener("input", () => {

    user_name.value = user_name.value.toLowerCase()

})