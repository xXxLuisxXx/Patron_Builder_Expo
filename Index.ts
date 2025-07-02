// ========================
// Código principal del sistema
// ========================

import { PedidoCompletoBuilder } from './PedidoC';
import { Menu } from './Menu';

console.log("***- 🍽️ MENÚ COMPLETO: -***");
const builderCompleto = new PedidoCompletoBuilder();  // 👈 nuevo builder
const directorCompleto = new Menu(builderCompleto);
directorCompleto.construirMenuCompleto();
const pedidoCompleto = builderCompleto.obtenerPedido();
pedidoCompleto.mostrarPedido();

console.log("\n***- 🥗 MENÚ LIGERO: -***");
const builderLigero = new PedidoCompletoBuilder();  // 👈 nuevo builder
const directorLigero = new Menu(builderLigero);
directorLigero.construirMenuLigero();
const pedidoLigero = builderLigero.obtenerPedido();
pedidoLigero.mostrarPedido();
