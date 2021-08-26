export class Registration {
    firmName:string;
    address:string;
    spocName:string;
    phoneNo:number;
    spocContact:string;
    password:string;
    //alphas:string[];
    //constructor(){}
    constructor(firmName:string,address:string,spocName:string,phoneNo:number,spocContact:string, password:string,){
    
    this.firmName=firmName;
    this.address=address;
    this.spocName=spocName;
    this.phoneNo=phoneNo;
    this.spocContact=spocContact;
    this.password=password;
    }
}
