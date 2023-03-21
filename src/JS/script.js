let data = [
  { sku: 101, name: "Product 101", price: 150, quantity: 50 },
  { sku: 102, name: "Product 102", price: 100, quantity: 20 },
];
$(".success").hide();
$(".error").hide();
$("#update_product").hide();

// Diaplay
function display() {
  let show = "";
  let cnt = 0;
  data.forEach((element) => {
    show += `<tr><td>${element.sku}</td>
        <td>${element.name}</td>
        <td>$${element.price}</td>
        <td>${element.quantity}</td>
        <td><a href="#" class="edit" onclick="value_exit(${cnt})">Edit</a><a href="#" class="delete" onclick="value_delete(${cnt++})">Delete</a></td></tr>`;
  });
  $("#added_row").html(show);
}
display();

// Exit Function
let some_val = 0;
function value_exit(val) {
  $('.required').css('border-color' , '#000000');
  $("#product_sku").val(data[val].sku);
  $("#product_name").val(data[val].name);
  $("#product_price").val(data[val].price);
  $("#product_quantity").val(data[val].quantity);
  some_val = val;
  $("#update_product").show();
  $("#add_product").hide();
}

// Delete Function
function value_delete(val) {
  $('.required').css('border-color' , '#000000');
  let confirms = confirm("Are you really sure");
  if (confirms == true) {
    data.splice(val, 1);
    display();
  } else {
    display();
  }
}

// Add Product Function
$(document).ready(function () {
  $("#add_product").click(function () {
    $('.required').css('border-color' , '#000000');
    let a = $("#product_sku").val();
    let b = $("#product_name").val();
    let c = $("#product_price").val();
    let d = $("#product_quantity").val();
    let lst = {
      sku: a,
      name: b,
      price: c,
      quantity: d,
    };
    if (a && b && c && d) {
      data.push(lst);
      display();
      $(".success").text("Product Added Successfully")
      $(".success").show(1000);
      $(".success").hide(2000);
    } else {
      $('.required').each(function() {
        if($(this).val()) {
          $(this).css('border-color' , '#000000');
        }
        else{
          $('.required').each(function() {
            if($(this).val() == '') {
               $(this).css('border-color' , '#ff0000');
            }
          })
        }
      })
      $(".error").show(1000);
      $(".error").hide(2000);
    }
  });
  $("#update_product").click(function () {
    $('.required').css('border-color' , '#000000');
    let a = $("#product_sku").val();
    let b = $("#product_name").val();
    let c = $("#product_price").val();
    let d = $("#product_quantity").val();
    if (a && b && c && d) {
      data[some_val].sku = a;
      data[some_val].name = b;
      data[some_val].price = c;
      data[some_val].quantity = d;
      display();
      $(".success").text("Product Updated Successfully")
      $(".success").show(1000);
      $(".success").hide(2000);
    } else {
      $('.required').each(function() {
        if($(this).val() == '') {
           $(this).css('border-color' , '#FF0000');
        }
      })
      $(".error").show(1000);
      $(".error").hide(2000);
    }
    $("#update_product").hide();
    $("#add_product").show();
  });
});