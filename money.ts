export class Money {

    static getMoneyString(arg:string | number, int:boolean = false): string {
        let inp: string;

        if (typeof arg === "string")
            inp = arg;
        else if (typeof arg === "number")
            inp = arg + "";
        else
            return null;
        
        if (inp === "")
            inp = "0";

        let arr = inp.split(".");
        let seq: string[] = arr[0].split("").reverse();
        let out = "";
        let k = 0;

        for (let i in seq) {
            out = seq[i] + "" + out;

            if (k >= 2) {
                out = " " + out;
                k = 0;
            }
            else
                k++;
        }

        return out.trim() + (int ? "" : "." +
                (arr.length > 1 ? (arr[1].length > 2 ? arr[1].substr(0, 2) : this.rightPad(arr[1], 2)) : "00")
            );
    }

    static rightPad(s:string, size:number): string {
        while (s.length < size) s = s + "0";
        return s;
    }
}
