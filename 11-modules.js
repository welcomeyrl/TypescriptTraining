// This file contains the code for modules.
export class PersonContact {
    emailValidator(mail) {
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if (mail == "" || !re.test(mail)) {
            alert("Wrong Email Address");
            return false;
        }
        return true;
    }
    phoneValidator(phone) {
        var re = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
        if (phone == "" || !re.test(phone)) {
            alert("Wrong Phone Number");
            return false;
        }
        return true;
    }
}
