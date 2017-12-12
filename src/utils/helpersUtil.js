let self;

export default class HelpersUtil {
    constructor(constants, q, moment, momenttz, tzlookup, lazyjs) {
        self = this;
        self.constants = constants;
        self.q = q;
        self.moment = moment;
        self.momenttz = momenttz;
        self.tzlookup = tzlookup;
        self.lazyjs = lazyjs;
    }
    
    stringFormat(format, args) {
        if(args) {
            return format.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] !== 'undefined'? args[number]: match;
            });
        }
        else{
            return format;
        }
    };

    fromModelVal(val, format){
        if(typeof(val) === "undefined"){
            return null;
        }
        else if(val !== null)
        {
            let type = typeof(val);
            if(format === 'bool'){
                let valStr = val.toString();
                if ((valStr) === 'true' || (valStr) === '1'){
                    return true;
                }
                else if((valStr) === 'false' || (valStr) === '0'){
                    return false;
                }
                else{
                    return null;
                }
            }
            else if(type === 'bool'){
                return ((val) ? 1 : 0);
            }
            else if(format === 'date'){
                return self.fromIso8601Date(val);
            }
            else if(format === 'utc'){
                return self.fromIso8601DateToUTC(val);
            }
            else if(format === 'num'){
                if(isNaN(val)){
                    return 0;
                }else {
                    return Number(val);
                }
            }
            else{
                return val;
            }
        }

        return null;
    } 
}
