
let item_db = [];
let itemId = 1;

const loadItemTable = () => {

    let tableBody = $('#item-table-tbody');
    tableBody.empty();
   
    item_db.map((item, index) => {
        console.log(item);

        let data = `<tr>
            <td>${item.itemId}</td>        
            <td>${item.name}</td>        
            <td>${item.quantity}</td>        
            <td>${item.price}</td>       
        </tr>`;
        $("#item-table-tbody").append(data);
    });
};


// add Item
$("#item_add_btn").on('click',function(){
    let itemId = $('#itemId').val();
    let name = $('#itemName').val();
    let quantity = $('#quantity').val();
    let price = $('#price').val();


    if(!itemId || !name || !quantity || !price){
        alert("please fill all the feilds !!")
        return;
    }

    let item = {
        itemId: itemId++,
        name: name,
        quantity: quantity,
        price: price
    };

    item_db.push(item);

    loadItemTable();
    

});

$("#item-table-tbody").on('click','.delete-btn-item',function(){
    let ItemIdToDelete = $(this).data('id');

    let confirmation = confirm("Are you sure to delete this item");

    if(confirmation){
        item_db = item_db.filter(item => item.id !== ItemIdToDelete);
        loadItemTable();
    }else{
        console.log("Item deletion canceled")
    }
});
