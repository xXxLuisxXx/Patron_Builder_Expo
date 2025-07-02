// Importamos el builder concreto que construye pedidos completos.
import { PedidoCompletoBuilder } from './PedidoC';
// Importamos la clase Menu, que actúa como el director y orquesta la construcción del pedido.
import { Menu } from './Menu';

// Sección del menú completo
console.log("***- 🍽️ MENÚ COMPLETO: -***");

// Creamos una instancia del builder para construir un pedido completo
const builderCompleto = new PedidoCompletoBuilder();  // nuevo builder

// Creamos una instancia del director (Menu) y le pasamos el builder
const directorCompleto = new Menu(builderCompleto);

// El director construye el pedido completo (comida, bebida y postre)
directorCompleto.construirMenuCompleto();

// Obtenemos el pedido ya construido
const pedidoCompleto = builderCompleto.obtenerPedido();

// Mostramos el contenido del pedido en consola
pedidoCompleto.mostrarPedido();


// Sección del menú ligero
console.log("\n***- 🥗 MENÚ LIGERO: -***");

// Creamos otra instancia del builder para un segundo pedido (independiente del anterior)
const builderLigero = new PedidoCompletoBuilder();  // nuevo builder

// Otro director, utilizando el mismo tipo de builder
const directorLigero = new Menu(builderLigero);

// El director construye un pedido más simple (solo comida y bebida)
directorLigero.construirMenuLigero();

// Obtenemos el pedido construido
const pedidoLigero = builderLigero.obtenerPedido();

// Mostramos el contenido del pedido en consola
pedidoLigero.mostrarPedido();
