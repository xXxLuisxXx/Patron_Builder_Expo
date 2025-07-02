
// Importamos la interfaz PedidoBuilder que define los métodos que debe implementar cualquier constructor de pedido.
import { PedidoBuilder } from './PedidoBuilder';

// La clase Menu actúa como el "Director" en el patrón de diseño Builder.
// Su función es definir el orden y la combinación de pasos para construir diferentes tipos de menús.
export class Menu {
    private builder: PedidoBuilder;

    // El constructor recibe un objeto que implementa la interfaz PedidoBuilder.
    // Este objeto será usado para construir el pedido paso a paso.
    constructor(builder: PedidoBuilder) {
        this.builder = builder;
    }

    // Este método construye un menú completo.
    // Un menú completo incluye: comida, bebida y postre.
    construirMenuCompleto(): void {
        this.builder.agregarComida();
        this.builder.agregarBebida();
        this.builder.agregarPostre();
    }

    // Este método construye un menú más ligero o simple.
    // Solo incluye: comida y bebida (sin postre).
    construirMenuLigero(): void {
        this.builder.agregarComida();
        this.builder.agregarBebida();
    }
}
