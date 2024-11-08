document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const totalPriceElement = document.getElementById('total-price');
    const options = document.querySelectorAll('.option');
    
    const prices = {
        '1': 10.00,
        '2': 18.00,
        '3': 24.00
    };

    function updateActiveOption(selectedValue) {
        options.forEach(option => {
            const radio = option.querySelector('input[type="radio"]');
            if (radio.value === selectedValue) {
                option.classList.add('active', 'selected-option');
            } else {
                option.classList.remove('active', 'selected-option');
            }
        });
    }

    function updatePrice(value) {
        totalPriceElement.textContent = `$${prices[value].toFixed(2)} USD`;
    }

    const defaultSelected = document.querySelector('input[type="radio"]:checked');
    if (defaultSelected) {
        updateActiveOption(defaultSelected.value);
        updatePrice(defaultSelected.value);
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            const value = this.value;
            updateActiveOption(value);
            updatePrice(value);
        });
    });

    
    const addToCartButton = document.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[type="radio"]:checked');
        const selectedQuantity = selectedOption ? selectedOption.value : '2';
        const totalPrice = prices[selectedQuantity];
        
        
        console.log(`Added ${selectedQuantity} units to cart. Total: $${totalPrice.toFixed(2)} USD`);
    });
});
