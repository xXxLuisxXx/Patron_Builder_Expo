import { Pedido } from './Pedido';

export interface PedidoBuilder {
    agregarComida(): void;
    agregarBebida(): void;
    agregarPostre(): void;
    obtenerPedido(): Pedido;
}
