// La clase Pedido representa el producto final que se va construyendo paso a paso.
// En este caso, un pedido contiene una lista de items (como comida, bebida, postre, etc.).
export class Pedido {
    // Arreglo privado que almacena los items del pedido.
    private items: string[] = [];

    // Método para agregar un nuevo item (por ejemplo: "Hamburguesa", "Jugo", etc.) al pedido.
    agregarItem(item: string): void {
        this.items.push(item);
    }

    // Método para mostrar todos los items del pedido en consola, numerados y ordenados.
    mostrarPedido(): void {
        console.log("🧾 Pedido del cliente:");
        // Recorre cada item del arreglo y lo imprime con su número correspondiente.
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
