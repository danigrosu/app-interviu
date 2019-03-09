export class Item {
    Code: string;
    Name: string;
    Description: string;
    Active: boolean;

    constructor(Code: string, Name: string, Description: string, Active: boolean) {
        this.Code = Code;
        this.Name = Name;
        this.Description = Description;
        this.Active = Active;
    }
}
