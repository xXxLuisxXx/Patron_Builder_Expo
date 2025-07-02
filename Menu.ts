import { PedidoBuilder } from './PedidoBuilder';

export class Menu {
    private builder: PedidoBuilder;

    constructor(builder: PedidoBuilder) {
        this.builder = builder;
    }

    construirMenuCompleto(): void {
        this.builder.agregarComida();
        this.builder.agregarBebida();
        this.builder.agregarPostre();
    }

    construirMenuLigero(): void {
        this.builder.agregarComida();
        this.builder.agregarBebida();
    }
}
