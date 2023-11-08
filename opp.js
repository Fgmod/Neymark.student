function toggleCard(cardNumber) {
    var card = document.getElementById('card' + cardNumber);
    if (card.style.display === 'none') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
