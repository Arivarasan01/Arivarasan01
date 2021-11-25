let savingAmount=10000;

switch(true){

    case (savingAmount>=60000):
        console.log("buy iphone mobile");
        break;
    case (savingAmount>=10000):
        console.log("buy android");
        break;
        case (savingAmount>=5000 && savingAmount<10000):
            console.log("buy basic phone");
            break;
        default:
            console.log("no phone in this age")    
    
    }    