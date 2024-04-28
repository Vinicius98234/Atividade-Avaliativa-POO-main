// QUESTÃO 1
var ItemMenu = /** @class */ (function () {
    function ItemMenu(opcao, textoDaOpcao) {
        this.opcao = opcao;
        this.textoDaOpcao = textoDaOpcao;
    }
    ItemMenu.prototype.getOpcao = function () {
        return this.opcao;
    };
    ItemMenu.prototype.getTextoDaOpcao = function () {
        return this.textoDaOpcao;
    };
    return ItemMenu;
}());
var Menu = /** @class */ (function () {
    function Menu() {
        this.itens = [];
        var op1 = new ItemMenu("1", "Atacar");
        this.itens.push(op1);
        var op2 = new ItemMenu("2", "Ataque especial");
        this.itens.push(op2);
        var op3 = new ItemMenu("3", "Tomar poção de Cura de HP");
        this.itens.push(op3);
        var op4 = new ItemMenu("4", "Tomar poção que restaura MP");
        this.itens.push(op4);
        var op5 = new ItemMenu("5", "Defender");
        this.itens.push(op5);
    }
    Menu.prototype.imprimirMenu = function () {
        console.log("Menu");
        this.itens.forEach(function (item) {
            console.log("".concat(item.getOpcao(), " - ").concat(item.getTextoDaOpcao()));
        });
        var prompt = require('prompt-sync')();
        var opc = prompt("Selecione a opção: ");
        return opc;
    };
    Menu.prototype.getitens_ = function () {
        return this.itens;
    };
    return Menu;
}());
// QUESTÃO 2
var Coliseu = /** @class */ (function () {
    function Coliseu(monstro) {
        this.monstro = monstro;
    }
    return Coliseu;
}());
// QUESTÃO 3
var Monstro = /** @class */ (function () {
    function Monstro(hp, forcaAtaque, forcaDefesa) {
        this.hp = hp;
        this.hpMax = hp;
        this.forcaAtaque = forcaAtaque;
        this.forcaDefesa = forcaDefesa;
    }
    Monstro.prototype.receberDano = function (danoSofrido) {
        if (this.hp <= 0) {
            console.log("O monstro já está derrotado!");
            return this.hp;
        }
        var danoFinal = Math.max(0, danoSofrido - this.forcaDefesa);
        if (danoFinal > 0) {
            this.hp -= danoFinal;
            if (this.hp <= 0.25 * this.hpMax) {
                console.log("O monstro está enfraquecido!");
                danoFinal /= 2;
                this.forcaAtaque *= 1.1;
                this.forcaDefesa *= 1.3;
            }
            if (this.hp <= 0) {
                console.log("O monstro foi derrotado!");
            }
            else {
                console.log("O monstro recebeu ".concat(danoFinal, " de dano. HP restante: ").concat(this.hp));
            }
        }
        else {
            console.log("A defesa do monstro absorveu todo o dano. HP não diminuiu.");
        }
        return this.hp;
    };
    Monstro.prototype.ataque = function () {
        return this.forcaAtaque;
    };
    Monstro.prototype.exibirinfoMonstro = function () {
        console.log("Informações do Monstro:");
        console.log("HP:", this.hp);
        console.log("Ataque:", this.forcaAtaque);
        console.log("Defesa:", this.forcaDefesa);
    };
    Monstro.prototype.gethp_ = function () {
        return this.hp;
    };
    Monstro.prototype.getforcaAtk = function () {
        return this.forcaAtaque;
    };
    Monstro.prototype.getforcaDef = function () {
        return this.forcaDefesa;
    };
    return Monstro;
}());
// QUESTÃO 4
var Equipamento = /** @class */ (function () {
    function Equipamento(nome, aumento_ataque, aumento_defesa) {
        this.nome = nome;
        this.aumento_ataque = aumento_ataque;
        this.aumento_defesa = aumento_defesa;
    }
    Equipamento.prototype.getnome_ = function () {
        return this.nome;
    };
    Equipamento.prototype.getaumentoataque = function () {
        return this.aumento_ataque;
    };
    Equipamento.prototype.getaumentodefesa = function () {
        return this.aumento_defesa;
    };
    return Equipamento;
}());
// QUESTÃO 5
var Lutador = /** @class */ (function () {
    function Lutador(hp, mp, ataque, defesa, c, cp, a) {
        this.hp = hp;
        this.mp = mp;
        this.ataque = ataque;
        this.defesa = defesa;
        this.eqpCabeca = c;
        this.eqpCorpo = cp;
        this.eqpArma = a;
    }
    Lutador.prototype.gethp_ = function () {
        return this.hp;
    };
    Lutador.prototype.getmp_ = function () {
        return this.mp;
    };
    Lutador.prototype.getataque_ = function () {
        return this.ataque;
    };
    Lutador.prototype.getdefesa_ = function () {
        return this.defesa;
    };
    Lutador.prototype.geteqpcbc = function () {
        return this.eqpCabeca;
    };
    Lutador.prototype.geteqpcp = function () {
        return this.eqpCorpo;
    };
    Lutador.prototype.geteqparm = function () {
        return this.eqpArma;
    };
    Lutador.prototype.exibirInfoLutador = function () {
        console.log("Informações do Lutador:");
        console.log("HP:", this.hp);
        console.log("MP:", this.mp);
        console.log("Ataque:", this.ataque);
        console.log("Defesa:", this.defesa);
        console.log("Equipamento da cabeça:", this.geteqpcbc());
        console.log("Equipamento do corpo:", this.geteqpcp());
        console.log("Arma:", this.geteqparm());
    };
    Lutador.prototype.ataquedoLutador = function () {
        var ataquetotal = this.ataque;
        if (this.eqpArma.getaumentoataque() >= 0) {
            ataquetotal += this.eqpArma.getaumentoataque();
        }
        return this.ataque;
    };
    Lutador.prototype.ataqueEspecial = function () {
        if (this.mp < 20) {
            console.log("MP Insuficiente");
            return 0;
        }
        var ataqueAumentado = this.ataque;
        if (this.eqpArma.getaumentoataque() >= 0) {
            ataqueAumentado += this.eqpArma.getaumentoataque();
        }
        this.ataque += (this.ataque / 0.5);
        this.mp -= (this.mp * 0.2);
        return ataqueAumentado;
    };
    Lutador.prototype.receberDano = function (danoSofrido) {
        if (this.getdefesa_() >= danoSofrido) {
            console.log("A defesa do lutador é maior ou igual ao dano sofrido. O HP não diminui.");
            return this.hp;
        }
        var danoEfetivo = danoSofrido - this.getdefesa_();
        this.hp -= danoEfetivo;
        return this.hp;
    };
    Lutador.prototype.tomarPocaoHP = function () {
        this.hp += this.hp * 0.25;
    };
    Lutador.prototype.tomarPocaoMP = function () {
        this.mp += this.mp * 0.25;
    };
    return Lutador;
}());
// QUESTÃO 6
var Jogo = /** @class */ (function () {
    function Jogo(menu, lutador, coliseu, monstro) {
        this.menu = menu;
        this.lutador = lutador;
        this.coliseu = coliseu;
        this.monstro = monstro;
    }
    Jogo.prototype.jogar = function () {
        console.log("Bem-vindo ao jogo!");
        var escolha = this.menu.imprimirMenu();
        console.log("Escolha do jogador:", escolha);
        if (escolha === "1") {
            console.log("Ataque normal selecionado!");
            this.monstro.receberDano(this.lutador.ataquedoLutador());
        }
        if (escolha === "2") {
            console.log("Ataque especial selecionado!");
            this.monstro.receberDano(this.lutador.ataqueEspecial());
        }
        if (this.monstro.gethp_() <= 0) {
            console.log("Parabéns! Você venceu a luta do Coliseu.");
            return;
        }
        if (this.monstro.gethp_() > 0) {
            console.log("O monstro contra-ataca!");
            this.lutador.receberDano(this.monstro.ataque());
        }
        if (this.lutador.gethp_() <= 0) {
            console.log("Voce foi destroçado pelo monstro..");
            return;
        }
        else if (this.lutador.gethp_() || this.monstro.gethp_() > 0) {
            console.log("Os dois ficaram vivos");
            console.log(this.lutador.exibirInfoLutador());
            console.log(this.monstro.exibirinfoMonstro());
            this.jogar();
        }
        else {
            console.log("O jogo acabou");
        }
    };
    Jogo.prototype.getMenu_ = function () {
        return this.menu;
    };
    Jogo.prototype.getLutador_ = function () {
        return this.lutador;
    };
    return Jogo;
}());
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
var eqpCabeca = new Equipamento("Capacete Viking", 15, 25);
var eqpCorpo = new Equipamento("Vestimenta de Batalha", 30, 45);
var eqpMao = new Equipamento("Lança do Destino", 45, 5);
// let homemaranha = new Lutador(100, 100, 50, 50, eqpCabeca, eqpCorpo, eqpMao)
// homemaranha.exibirInfoLutador();
// homemaranha.ataquedoLutador();
// homemaranha.ataqueEspecial();
// homemaranha.receberDano(80);
// homemaranha.tomarPocaoHP();
// homemaranha.tomarPocaoMP();
// console.log("HP após tomar poção:", homemaranha.gethp_());
// console.log("MP após tomar poção:", homemaranha.getmp_());
var jogo = new Jogo(new Menu, new Lutador(100, 20, 40, 20, eqpCabeca, eqpCorpo, eqpMao), new Coliseu("Porco-Aranha"), new Monstro(120, 30, 20));
jogo.jogar();
