// Bastet Coffee - External JavaScript
// Upload this to: https://github.com/YOUR_USERNAME/bastet-coffee
// Then use: https://raw.githubusercontent.com/YOUR_USERNAME/bastet-coffee/main/bastet-coffee.js

function updatePrice(select) {
    var card = select.closest('.product-card');
    if(!card) return;
    var priceDisplay = card.querySelector('.price-display');
    var selectedOption = select.options[select.selectedIndex];
    var weightText = selectedOption.text.split(' - ')[0];
    var price = selectedOption.value;
    if(priceDisplay) priceDisplay.textContent = price + ' جنيه';

    var productTitle = card.querySelector('.product-title');
    var waLink = card.querySelector('.btn-add-cart');
    if(!productTitle || !waLink) return;
    var title = productTitle.textContent.trim();
    var waText = 'مرحباً Bastet Coffee%0Aأريد طلب: ' + encodeURIComponent(title) + '%0Aالوزن: ' + encodeURIComponent(weightText) + '%0Aالسعر: ' + price + ' جنيه';
    waLink.href = 'https://wa.me/201146502020?text=' + waText;
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize WhatsApp links
    document.querySelectorAll('.product-card').forEach(function(card) {
        var select = card.querySelector('.weight-select');
        if(select) updatePrice(select);
    });

    // Mobile dropdown toggle
    document.querySelectorAll('.nav-menu li').forEach(function(li) {
        var dropdown = li.querySelector('.dropdown-menu');
        if(dropdown) {
            li.addEventListener('click', function(e) {
                if(window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle('show');
                }
            });
        }
    });
});
