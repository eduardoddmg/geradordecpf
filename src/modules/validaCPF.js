
function rand(max, min)
{
    return Math.floor(Math.random()*(max-min)+min);
}

let cpf = rand(100000000, 999999999);
let numeros = []

for (let i = 1; i < 10; i++)
{
    numeros.unshift(parseInt(cpf%(10**1)));
    cpf = cpf/(10**1)
}


class VerificadorCpf1 {
    constructor(cpf, valor_multiplicado, valor_soma, aux, counter)
    {
        numeros = [];
        this.cpf = cpf;
        this.valor_multiplicado = valor_multiplicado;
        this.valor_soma = valor_soma;
        this.aux = aux;
        this.counter = counter;
        for (; this.counter < 1; this.counter++)
        {
            for (let i of cpf)
             {
                 this.valor_multiplicado =  i*aux;
                 this.valor_soma += this.valor_multiplicado;
                 aux--;
             }    
             this.valor = 11 - (this.valor_soma % 11);
             if (this.valor > 9) this.valor = 0;
             numeros.push(this.valor);
             counter++;
        }             
    }    
}    

class VerificadorCpf2 {
    constructor(cpf, valor_multiplicado, valor_soma, aux, counter)
    {
        this.cpf = cpf;
        this.valor_multiplicado = valor_multiplicado;
        this.valor_soma = valor_soma;
        this.aux = aux;
        this.counter = counter;
        for (; this.counter < 1; this.counter++)
        {
            for (let i of cpf)
             {
                 this.valor_multiplicado =  i*aux;
                 this.valor_soma += this.valor_multiplicado;
                 aux--;
             }    
             this.valor = 11 - (this.valor_soma % 11);
             if (this.valor > 9) this.valor = 0;
             numeros.push(this.valor);
             counter++;
        }             
    }    
}
    function geradorCpf()
    {
        numeros = [];
        new VerificadorCpf1(numeros, 0,0,numeros.length+1,0);
        new VerificadorCpf2(numeros,0,0,numeros.length+1,0);
        numeros = String(numeros);
        numeros = numeros.replaceAll(',','');
        return numeros;
    }




export { geradorCpf };