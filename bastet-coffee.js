// Bastet Coffee - External JavaScript
// Repository: https://github.com/shawkyragab-netizen/bastet-coffee
// Direct link: https://raw.githubusercontent.com/shawkyragab-netizen/bastet-coffee/main/bastet-coffee.js

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
    var waText = 'مرحبا Bastet Coffee%0Aأريد طلب: ' + encodeURIComponent(title) + '%0Aالوزن: ' + encodeURIComponent(weightText) + '%0Aالسعر: ' + price + ' جنيه';
    waLink.href = 'https://wa.me/201146502020?text=' + waText;
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize WhatsApp links
    document.querySelectorAll('.product-card').forEach(function(card) {
        var select = card.querySelector('.weight-select');
        if(select) updatePrice(select);
    });

    // Mobile mega menu toggle
    document.querySelectorAll('.has-mega-menu > a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            if(window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                var mega = this.parentElement.querySelector('.mega-menu');
                if(mega) {
                    // Close other open mega menus
                    document.querySelectorAll('.mega-menu.show').forEach(function(m) {
                        if(m !== mega) m.classList.remove('show');
                    });
                    mega.classList.toggle('show');
                }
            }
        });
    });

    // Close mega menu when clicking outside
    document.addEventListener('click', function(e) {
        if(!e.target.closest('.has-mega-menu')) {
            document.querySelectorAll('.mega-menu.show').forEach(function(m) {
                m.classList.remove('show');
            });
        }
    });
});
