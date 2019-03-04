
const Utils = {
    getCampaignGUID(){
        return "fcfb9fdc-6934-4a2c-8b39-f307d1845a00"  //world earth day
    },

    setCookie(name,value,days){
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },

    getCookie(name){
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            //console.log(`checking: ${ca[i]} against: ${name}`)
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return "";
    },

    clearCookie(name){
        document.cookie = name+'=; Max-Age=-99999999;'; 
    },

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },

    getDatePart(inDate, datePart){
        var myDate = new Date(inDate);        
        switch (datePart){
            case "mins":
                return ('0'+myDate.getMinutes()).slice(-2);
            case "hh":
                return ('0'+myDate.getHours()).slice(-2);
            case "dd":
                return myDate.getDate()
            case "mm":
                return this.getMonthShort(myDate.getMonth()+1)
            default:
                return inDate;
        }
    },

    getMonthShort(inMonth){
        switch (inMonth){
            case 1:
                return "JAN"
            case 2:
                return "FEB"
            case 3:
                return "MAR"
            case 4:
                return "APR"
            case 5:
                return "MAY"
            case 6:
                return "JUN"
            case 7:
                return "JUL"
            case 8:
                return "AUG"
            case 9:
                return "SEP"
            case 10:
                return "OCT"
            case 11:
                return "NOV"
            case 12:
                return "DEC"
            default:
                return ""
        }
    }

}

export default Utils;