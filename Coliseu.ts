// QUESTÃO 1
class ItemMenu {
    private opcao:string;
    private textoDaOpcao:string;

    constructor(opcao:string , textoDaOpcao:string){
        this.opcao = opcao;
        this.textoDaOpcao = textoDaOpcao
    }
    getOpcao():string{
        return this.opcao
    }
    getTextoDaOpcao(){
        return this.textoDaOpcao;
    }
}  

class Menu {

    private itens: ItemMenu[] = [];

    constructor(){
        let op1 = new ItemMenu("1", "Atacar")
        this.itens.push(op1)
        let op2 = new ItemMenu("2" , "Ataque especial")
        this.itens.push(op2)
        let op3 = new ItemMenu("3" , "Tomar poção de Cura de HP")
        this.itens.push(op3)
        let op4 = new ItemMenu("4" , "Tomar poção que restaura MP")
        this.itens.push(op4)
        let op5 = new ItemMenu("5" , "Defender")
        this.itens.push(op5)
    }
    imprimirMenu():string{
        console.log("Menu")
        this.itens.forEach(item => {
            console.log(`${item.getOpcao()} - ${item.getTextoDaOpcao()}`)
        });
        var prompt = require('prompt-sync')();
        let opc = prompt("Selecione a opção: ")
        return opc;
    }
    getitens_():ItemMenu[]{
        return this.itens
    }

}
// QUESTÃO 2
class Coliseu {
    private monstro: string;

    constructor(monstro: string) {
        this.monstro = monstro;
    }
}
// QUESTÃO 3
class Monstro {
    private hp: number;
    private forcaAtaque: number;
    private forcaDefesa: number;
    private hpMax: number;

    constructor(hp: number, forcaAtaque: number, forcaDefesa: number) {
        this.hp = hp;
        this.hpMax = hp;
        this.forcaAtaque = forcaAtaque;
        this.forcaDefesa = forcaDefesa;
    }
    receberDano(danoSofrido: number): number {
        if (this.hp <= 0) {
            console.log("O monstro já está derrotado!");
            return this.hp;
        }
        

        let danoFinal = Math.max(0, danoSofrido - this.forcaDefesa);
        if (danoFinal > 0) {
            this.hp -= danoFinal;
            if (this.hp <= 0.25 * this.hpMax) {
                console.log("O monstro está enfraquecido!")
                danoFinal /= 2; 
                this.forcaAtaque *= 1.1; 
                this.forcaDefesa *= 1.3; 
            }

            if (this.hp <= 0) {
                console.log("O monstro foi derrotado!");
            
            }
             else {
                console.log(`O monstro recebeu ${danoFinal} de dano. HP restante: ${this.hp}`);
            }
        } else {
            console.log("A defesa do monstro absorveu todo o dano. HP não diminuiu.");
        }
        

        return this.hp;
        
    
    
    }
    ataque(): number {
        return this.forcaAtaque;
    }
    exibirinfoMonstro(){
        console.log("Informações do Monstro:");
        console.log("HP:", this.hp);
        console.log("Ataque:", this.forcaAtaque);
        console.log("Defesa:", this.forcaDefesa);
    }
    gethp_(): number {
        return this.hp;
    }

    getforcaAtk(): number {
        return this.forcaAtaque;
    }

    getforcaDef(): number {
        return this.forcaDefesa;
    }
    
}
// QUESTÃO 4
class Equipamento {
    private nome: string;
    private aumento_ataque: number;
    private aumento_defesa: number;

    constructor(nome: string, aumento_ataque: number, aumento_defesa: number) {
        this.nome = nome;
        this.aumento_ataque = aumento_ataque;
        this.aumento_defesa = aumento_defesa;
    }
    getnome_():string{
        return this.nome
    }
    getaumentoataque():number{
        return this.aumento_ataque
    }
    getaumentodefesa():number{
        return this.aumento_defesa
    }
}
// QUESTÃO 5
class Lutador {
    private hp: number;
    private mp: number;
    private ataque: number;
    private defesa: number;
    private eqpCabeca:Equipamento;
    private eqpCorpo:Equipamento;
    private eqpArma:Equipamento;

    constructor(hp: number, mp: number, ataque: number, defesa: number, c, cp, a) {
        this.hp = hp;
        this.mp = mp;
        this.ataque = ataque;
        this.defesa = defesa;
        this.eqpCabeca = c;
        this.eqpCorpo = cp;
        this.eqpArma = a;
    }
    
    gethp_():number{
        return this.hp
    }
    getmp_():number{
        return this.mp
    }
    getataque_():number{
        return this.ataque;
    }
    getdefesa_():number{
        return this.defesa;
    }
    geteqpcbc():Equipamento{
        return this.eqpCabeca
    }
    geteqpcp():Equipamento{
        return this.eqpCorpo
    }
    geteqparm():Equipamento{
        return this.eqpArma
    }
    
    exibirInfoLutador(){
        console.log("Informações do Lutador:");
        console.log("HP:", this.hp);
        console.log("MP:", this.mp);
        console.log("Ataque:", this.ataque);
        console.log("Defesa:", this.defesa);
        console.log("Equipamento da cabeça:", this.geteqpcbc())
        console.log("Equipamento do corpo:", this.geteqpcp())
        console.log("Arma:", this.geteqparm())
    }
    ataquedoLutador(): number {
        let ataquetotal = this.ataque 
        if (this.eqpArma.getaumentoataque() >= 0){
            ataquetotal += this.eqpArma.getaumentoataque()
        }
        return this.ataque;
    }
    ataqueEspecial(): number {
        if (this.mp < 20) {
            console.log("MP Insuficiente");
            return 0;
        }
        let ataqueAumentado = this.ataque
        if (this.eqpArma.getaumentoataque() >= 0){
            ataqueAumentado += this.eqpArma.getaumentoataque()
        }
        this.ataque += (this.ataque / 0.5);
        this.mp -= (this.mp * 0.2)
        return ataqueAumentado;
    }
    receberDano(danoSofrido: number): number {
        if (this.getdefesa_() >= danoSofrido) {
            console.log("A defesa do lutador é maior ou igual ao dano sofrido. O HP não diminui.");
            return this.hp;
        }
        const danoEfetivo = danoSofrido - this.getdefesa_();
        this.hp -= danoEfetivo;
        return this.hp;
    }
    tomarPocaoHP(): void {
        this.hp += this.hp * 0.25; 
    }

    tomarPocaoMP(): void {
        this.mp += this.mp * 0.25; 
    }
}
// QUESTÃO 6

class Jogo {
    private menu: Menu;
    private lutador: Lutador;
    private coliseu: Coliseu;
    private monstro: Monstro;
    
    constructor(menu:Menu,lutador:Lutador,coliseu:Coliseu,monstro:Monstro){
        this.menu = menu;
        this.lutador = lutador;
        this.coliseu = coliseu;
        this.monstro = monstro;


    }

    jogar(): void {
        console.log("Bem-vindo ao jogo!");

        let escolha = this.menu.imprimirMenu();
        console.log("Escolha do jogador:", escolha);

        if (escolha === "1"){
            console.log("Ataque normal selecionado!");
            this.monstro.receberDano(this.lutador.ataquedoLutador())
        }
        if(escolha === "2"){
            console.log("Ataque especial selecionado!");
            this.monstro.receberDano(this.lutador.ataqueEspecial())
        }
        if (this.monstro.gethp_() <= 0){
            console.log("Parabéns! Você venceu a luta do Coliseu.")
            return;
        }
        if (this.monstro.gethp_() > 0){
            console.log("O monstro contra-ataca!")
            this.lutador.receberDano(this.monstro.ataque());
        }
        if (this.lutador.gethp_() <= 0){
            console.log("Voce foi destroçado pelo monstro..")
            return;
        }
        else if (this.lutador.gethp_() || this.monstro.gethp_() > 0) {
            console.log("Os dois ficaram vivos")
            console.log(this.lutador.exibirInfoLutador())
            console.log(this.monstro.exibirinfoMonstro())
            this.jogar()
        }
        else{
            console.log("O jogo acabou")
        }
        
        
    }
    getMenu_():Menu{
        return this.menu
    }
    getLutador_():Lutador{
        return this.lutador
    }
}
    
// RODAR QUESTÃO 1
// let menu = new Menu();

// menu.imprimirMenu();

// RODAR QUESTÃO 3
// let monstro1 = new Monstro(100, 20, 10);
// console.log("Status inicial do monstro:");
// console.log("HP:", monstro1.gethp_());
// console.log("Ataque:", monstro1.getforcaAtk());
// console.log("Defesa:", monstro1.getforcaDef());

// console.log("\nAtaque do monstro:", monstro1.getforcaAtk());

// monstro1.receberDano(100);

// console.log("\nStatus do monstro após receber dano:");
// console.log("HP:", monstro1.gethp_());
// console.log("Ataque:", monstro1.getforcaAtk());
// console.log("Defesa:", monstro1.getforcaDef());

// RODAR QUESTÃO 4
// let eqpCabeca1: Equipamento = new Equipamento("Coroa de Rei", 10, 20);
// let eqpCorpo1: Equipamento = new Equipamento("Armadura de PecoPeco", 15, 30);
// let eqpMao1: Equipamento = new Equipamento("Machado de Guerra", 30, 0);
// let equipamentos = [eqpCabeca1, eqpCorpo1, eqpMao1]
// console.log (equipamentos)

// RODAR QUESTÃO 5
let eqpCabeca: Equipamento = new Equipamento("Capacete Viking", 15, 25);
let eqpCorpo: Equipamento = new Equipamento("Vestimenta de Batalha", 30, 45);
let eqpMao: Equipamento = new Equipamento("Lança do Destino", 45, 5);

// let homemaranha = new Lutador(100, 100, 50, 50, eqpCabeca, eqpCorpo, eqpMao)
// homemaranha.exibirInfoLutador();
// homemaranha.ataquedoLutador();
// homemaranha.ataqueEspecial();
// homemaranha.receberDano(80);
// homemaranha.tomarPocaoHP();
// homemaranha.tomarPocaoMP();
// console.log("HP após tomar poção:", homemaranha.gethp_());
// console.log("MP após tomar poção:", homemaranha.getmp_());

let jogo = new Jogo(new Menu,new Lutador(100,20,40,20, eqpCabeca,eqpCorpo,eqpMao),new Coliseu("Porco-Aranha"),new Monstro(120,30,20));
jogo.jogar()


