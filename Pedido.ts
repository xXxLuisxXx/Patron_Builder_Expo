export class Pedido {
    private items: string[] = [];

    agregarItem(item: string): void {
        this.items.push(item);
    }

    mostrarPedido(): void {
        console.log("🧾 Pedido del cliente:");
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

