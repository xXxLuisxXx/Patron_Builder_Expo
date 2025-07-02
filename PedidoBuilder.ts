// Importamos la clase Pedido, que será el resultado final del proceso de construcción.
import { Pedido } from './Pedido';

// La interfaz PedidoBuilder define los pasos que deben seguirse para construir un pedido.
// Cada clase que implemente esta interfaz deberá definir estos métodos.
export interface PedidoBuilder {
    
    // Método para agregar la comida al pedido (por ejemplo: una hamburguesa, ensalada, etc.).
    agregarComida(): void;

    // Método para agregar una bebida al pedido (por ejemplo: jugo, gaseosa, etc.).
    agregarBebida(): void;

    // Método para agregar un postre al pedido (por ejemplo: helado, pastel, etc.).
    agregarPostre(): void;

    // Método para obtener el pedido ya construido y listo para usarse.
    obtenerPedido(): Pedido;
}
