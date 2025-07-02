// Importamos la clase Pedido que representa el producto final.
import { Pedido } from './Pedido';
// Importamos la interfaz PedidoBuilder que define los pasos para construir un pedido.
import { PedidoBuilder } from './PedidoBuilder';

// La clase PedidoCompletoBuilder implementa la interfaz PedidoBuilder.
// Su objetivo es construir un pedido completo con comida, bebida y postre.
export class PedidoCompletoBuilder implements PedidoBuilder {
    // Atributo privado donde se guarda el pedido que se está construyendo.
    private pedido: Pedido;

    // El constructor inicializa un nuevo pedido vacío.
    constructor() {
        this.pedido = new Pedido();
    }

    // Agrega un ítem de comida al pedido.
    agregarComida(): void {
        this.pedido.agregarItem(" 🍔 Hamburguesa con papas");
    }

    // Agrega un ítem de bebida al pedido.
    agregarBebida(): void {
        this.pedido.agregarItem(" 🥤 Jugo de naranja ");
    }

    // Agrega un ítem de postre al pedido.
    agregarPostre(): void {
        this.pedido.agregarItem(" 🍨 Helado de vainilla");
    }

    // Devuelve el pedido completamente construido.
    obtenerPedido(): Pedido {
        return this.pedido;
    }
}
