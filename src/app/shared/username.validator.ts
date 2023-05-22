import { AbstractControl } from "@angular/forms";

export function InvalidUserName(control:AbstractControl):{[key:string]:any}| null{
    let invalidUserNameList:string[] = ['admin','test','hello','new','username'];
    let invalid:boolean = false;
    invalidUserNameList.forEach(element => {
        if(element === control.value){
             invalid = true;
        }
    });    
    return invalid ? {'invalidName':{value:control.value}} : null;
}