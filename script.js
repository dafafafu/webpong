function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); 
  }

  function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }

  function addToCart(productName, productPrice) {
    const phoneNumber = '6289513433236';
    const message = `Halo, saya ingin membeli produk: ${productName} dengan harga Rp${productPrice}. Apakah stok masih tersedia?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  function addToCartTl(productName, productPrice) {
    const botUsername = 'Rebels_RBL';
    const message = `Halo, saya ingin membeli produk: ${productName} dengan harga Rp${productPrice}. Apakah stok masih tersedia?`;
    const url = `https://t.me/${botUsername}?start=${encodeURIComponent(message)}`;
    window.location.href = url; 
  }