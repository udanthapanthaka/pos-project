
const cleanCustomerForm  = () => {
    $('#customerId').val("");
    $('#customerName').val("")
    $('#telephone').val("");
    $('#city').val("");
}


const validateMobile = (telephone) => {
    const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return sriLankanMobileRegex.test(telephone);
}


// const validateId = (id) =>{
//     const idRegex = /^C00-\d{3}$/;
//     return idRegex.test(id);
// }

const loadCustomerTable = () => {
    $("#customer-table-tbody").empty();
    customer_array.map((item, index) => {
        console.log(item);
        let data = `<tr><td>${item.customer_id}</td><td>${item.customer_name}</td><td>${item.telephone}</td><td>${item.city}</td></tr>`
        $("#customer-table-tbody").append(data);
    });
};


// Add Customer Button
$("#addCustomerBtn").on("click", function() {
    let customer_id = $('#customerId').val();
    let customer_name = $('#customerName').val();
    let telephone = $('#telephone').val();
    let city = $('#city').val(); 
    if(customer_name.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Customer Name",
        });
    } //else if(!validateId(customer_id)) {
        // Swal.fire({
        //     icon: "error",
        //     title: "Invalid Input",
        //     text: "Invalid customer Id",
        // });
    //} 
    else if(!validateMobile(telephone)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid telephone",
        });
    } else if(city.length===0) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid city",
        });
    } else {
        let customer = new CustomerModel(
            customer_array.length + 1,
            customer_id,
            customer_name,
            telephone,
            city
        );


        customer_array.push(customer);

        // clean customer form
        cleanCustomerForm();

        loadCustomerTable();
    }


});