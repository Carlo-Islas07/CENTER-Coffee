document.addEventListener('DOMContentLoaded', () => {
    const carritoButton = document.getElementById('carrito-button');
    const carritoDropdown = document.getElementById('carrito-dropdown');
    const carritoItems = document.getElementById('carrito-items');
    const totalElement = document.getElementById('total');
    const comprarButton = document.getElementById('comprar-button');
    
    let carrito = [];
    
    carritoButton.addEventListener('click', () => {
        carritoDropdown.classList.toggle('hidden');
    });
    
    document.querySelectorAll('.comprar-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const nombre = e.target.getAttribute('data-nombre');
            const precio = parseFloat(e.target.getAttribute('data-precio'));
            
            carrito.push({ nombre, precio });
            actualizarCarrito();
        });
    });
    
    comprarButton.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('No has agregado artículos al carrito.');
            return;
        }
        
        const nombresArticulos = carrito.map(item => item.nombre).join(', ');
        const total = carrito.reduce((acc, item) => acc + item.precio, 0);
        
        alert(`Compraste los artículos: ${nombresArticulos}. El total de dichos artículos es $${total}. Gracias por su compra`);
        
        carrito = [];
        actualizarCarrito();
        carritoDropdown.classList.add('hidden');
    });
    
    function actualizarCarrito() {
        carritoItems.innerHTML = '';
        carrito.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;
            carritoItems.appendChild(li);
        });
        
        const total = carrito.reduce((acc, item) => acc + item.precio, 0);
        totalElement.textContent = `Total: $${total}`;
        carritoButton.textContent = `Carrito (${carrito.length})`;
    }
});

