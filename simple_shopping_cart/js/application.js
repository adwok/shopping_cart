document.addEventListener('DOMContentLoaded', function() {
  var grandTotal = 0;
  var shoppingList = document.getElementById('shopping-list');
  var itemInput = document.getElementById('item-input');
  var addButton = document.getElementById('add-button');
  var h2 = document.getElementById('hTwo');
  h2.innerHTML = 'Grand Total: $' + String(grandTotal);
  var addItem = function () {
    var itemCol = document.createElement('div');
    itemCol.setAttribute('class', 'col-xs-12 item');
    var itemRow = document.createElement('div');
    itemRow.setAttribute('class', 'row');
    var h5 = document.createElement('h5');
    h5.setAttribute('class', 'col-xs-3');
    h5.innerHTML = itemInput.value;
    var qtyInput = document.createElement('input');
    qtyInput.setAttribute('class', 'form-control');
    qtyInput.setAttribute('class', 'col-xs-2');
    qtyInput.setAttribute('placeholder', 'Quantity');
    var priceInput = document.createElement('input');
    priceInput.setAttribute('class', 'form-control');
    priceInput.setAttribute('class', 'col-xs-2');
    priceInput.setAttribute('placeholder', 'Price($)');
    var calcButton = document.createElement('button');
    calcButton.setAttribute('class', 'btn btn-primary');
    calcButton.innerHTML = 'Calculate';
    var subTotal = 0;
    var h6 = document.createElement('h6');
    h6.setAttribute('class', 'col-xs-3');
    h6.innerHTML = 'Subtotal: $' + String(subTotal);
    var removeButton = document.createElement('button');
    removeButton.setAttribute('class','btn btn-danger remove-button');
    removeButton.innerHTML = "REMOVE";
    itemRow.appendChild(h5);
    itemRow.appendChild(qtyInput);
    itemRow.appendChild(priceInput);
    itemRow.appendChild(calcButton);
    itemRow.appendChild(h6);
    itemRow.appendChild(removeButton);
    itemCol.appendChild(itemRow);
    shoppingList.appendChild(itemCol);
    calcButton.addEventListener('click', function () {
      grandTotal -= subTotal;
      subTotal = 0;
      var qtyNum = function () {
        if (Number.isNaN(qtyInput.value)) {
          return 0;
        }
        else {
          return Number(qtyInput.value);
        }
      };
      subTotal += qtyNum() * Number(priceInput.value);
      h6.innerHTML = 'Subtotal: $' + String(subTotal) + ' (' + String(qtyNum()) + ' @ $' + priceInput.value + '/each)';
      grandTotal += subTotal;
      h2.innerHTML = 'Grand Total: $' + String(grandTotal);
      
    });
    removeButton.onclick = function() {
      var child = this.parentNode.parentNode;
      shoppingList.removeChild(child);
      grandTotal -= subTotal;
      h2.innerHTML = 'Grand Total: $' + String(grandTotal);
    };
  };
  addButton.addEventListener('click', function () {
    addItem();
    itemInput.value = '';
  });
  
});