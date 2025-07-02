"use strict";
// ========================
// Código principal del sistema
// ========================
Object.defineProperty(exports, "__esModule", { value: true });
var PedidoC_1 = require("./PedidoC");
var Menu_1 = require("./Menu");
console.log("***- 🍽️ MENÚ COMPLETO: -***");
var builderCompleto = new PedidoC_1.PedidoCompletoBuilder(); // 👈 nuevo builder
var directorCompleto = new Menu_1.Menu(builderCompleto);
directorCompleto.construirMenuCompleto();
var pedidoCompleto = builderCompleto.obtenerPedido();
pedidoCompleto.mostrarPedido();
console.log("\n***- 🥗 MENÚ LIGERO: -***");
var builderLigero = new PedidoC_1.PedidoCompletoBuilder(); // 👈 nuevo builder
var directorLigero = new Menu_1.Menu(builderLigero);
directorLigero.construirMenuLigero();
var pedidoLigero = builderLigero.obtenerPedido();
pedidoLigero.mostrarPedido();
