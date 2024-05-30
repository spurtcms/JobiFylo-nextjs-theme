const EmailValidator = (value) => {
    console.log(value,'asdadasd')
    if (/^\w([\\.-]?\w)*@\w([\\.-]?\w)*(\.\w{2,3})+$/.test(value))
        return true
    else
        return false;
}

const NumberValidator = (value) => {
    if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/.test(value)) {
        return true
    } else {
        return false
    }
}

const upperPresent = (value) => {
    if (/^(?=.*[A-Z]).+$/.test(value))
        return true
    else
        return false;
}

const lowerPresent = (value) => {
    if (/^(?=.*[a-z]).+$/.test(value))
        return true
    else
        return false;
}

const numPresent = (value) => {
    if (/\d/.test(value))
        return true
    else
        return false;
}

const specialPresent = (value) => {
    if (/([!@#$%^&*(),.?":{}|<>])/.test(value))
        return true
    else
        return false;
}

export { upperPresent, lowerPresent, numPresent, specialPresent,EmailValidator, NumberValidator  }