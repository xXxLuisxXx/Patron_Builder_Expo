import { Pedido } from './Pedido';
import { PedidoBuilder } from './PedidoBuilder';

export class PedidoCompletoBuilder implements PedidoBuilder {
    private pedido: Pedido;

    constructor() {
        this.pedido = new Pedido();
    }

    agregarComida(): void {
        this.pedido.agregarItem(" 🍔 Hamburgesa con papas");
    }

    agregarBebida(): void {
        this.pedido.agregarItem(" 🥤 Jugo de naranja ");
    }

    agregarPostre(): void {
        this.pedido.agregarItem(" 🍨 Helado de vainilla");
    }

    obtenerPedido(): Pedido {
        return this.pedido;
    }
}
