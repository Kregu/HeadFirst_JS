function validate(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/);
}
result = validate("1234856")
console.log(result)