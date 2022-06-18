
class Cuenta{
    constructor(titular){
        this.titular=titular
        this.saldo=0;
    }

    ingresar(monto){
        this.saldo+=monto;
        document.write(`<p>Ingreso $${monto}</p>`);
    }

    extraer(monto){
        if(this.saldo >= monto){
            this.saldo-=monto;
            document.write(`<p>Extraccion de $${this.saldo}</p>`);
        }else{
            document.write('<br>Fondos insuficientes');
        }
    }

    informar(){
        document.write(`<p>La cuenta de ${this.titular}, posee un saldo de $${this.saldo}</p>`);
    }
}

let cuenta=new Cuenta('Alex');
cuenta.informar();
cuenta.ingresar(10000000);
cuenta.informar();
cuenta.extraer(55000);
cuenta.informar();