document.addEventListener("alpine:init", () => {
  Alpine.data("pruducts", () => ({
    items: [
      { id: 1, name: "gayo", img: "1.jpg", price: 35000 },
      { id: 2, name: "toraja", img: "2.jpg", price: 50000 },
      { id: 3, name: "kintamani", img: "3.jpg", price: 32000 },
      { id: 4, name: "lampung", img: "4.jpg", price: 45000 },
      { id: 5, name: "G.sindoro", img: "5.jpg", price: 23000 },
      { id: 6, name: "flores", img: "6.jpg", price: 40000 },
      { id: 7, name: "solok radjo", img: "7.jpg", price: 30000 },
      { id: 8, name: "wamena", img: "8.jpg", price: 70000 },
      { id: 9, name: "temanggung", img: "9.jpg", price: 32000 },
      { id: 10, name: "malabar", img: "10.jpg", price: 32000 },
      { id: 11, name: "mandaling", img: "11.jpg", price: 50000 },
      { id: 12, name: "sidikalang", img: "3.jpg", price: 3000 },
      { id: 13, name: "ijen raung", img: "9.jpg", price: 44000 },
      { id: 14, name: "bengkulu", img: "2.jpg", price: 34000 },
      { id: 15, name: "wahana", img: "10.jpg", price: 55000 },
    ],
  })),
    Alpine.store("chart", {
      items: [],
      total: 0,
      quantity: 0,
      add(newItem) {
        console.log(newItem);
        const chartItem = this.items.find((item) => item.id === newItem.id);
        if (!chartItem) {
          this.items.push({ ...newItem, quantity: 1, total: newItem.price });
          this.quantity++;
          this.total += newItem.price;
        } else {
          this.items = this.items.map((item) => {
            if (item.id !== newItem.id) {
              return item;
            } else {
              item.quantity++;
              item.total = item.quantity * item.price;
              this.quantity++;
              this.total += item.price;
              return item;
            }
          });
        }
      },
      remove(id) {
        const chartItem = this.items.find((item) => item.id === id);
        if (chartItem.quantity > 1) {
          this.items = this.items.map((item) => {
            if (item.id !== id) {
              return item;
            } else {
              item.quantity--;
              item.total = item.quantity * item.price;
              this.quantity--;
              this.total -= item.price;
              return item;
            }
          });
        } else if (chartItem.quantity === 1) {
          this.items = this.items.filter((item) => item.id !== id);
          this.quantity--;
          this.total = chartItem.price;
        }
      },
    });
});
