<!DOCTYPE html>
<html>
    <head>
    <style>
        table, td, th {
            border: 1px solid black;
            border-collapse: collapse;
        }
        label {
            margin-right: 10px;
        }
        select {
            margin-right: 10px;
        }
    </style>
    </head>
    <body>
    <table>
        <tbody>
            <tr id="row-1">
                <td>Granulation</td>
                <td>Suit 1 :
                    <label for="status">Status:</label>
                    <select name="status_select" id="status_select"></select>

                    <label for="product">Product:</label>
                    <select name="product_select" id="product_select"></select>
                </td>
            </tr>
        </tbody>
    </table>
    <script>
        var status = ["batch", "major_clean", "minor_clean", "maintanance"];
        var products = ["Odimune","TDF/3TC/DTG","TDF/3TC/DTG(A)","TDF/3TC/DTG-PART-C"];
        var statusSelect = document.getElementById("status_select");
        var productSelect = document.getElementById("product_select");
        for (var i = 0; i < status.length; i++) {
            var option = document.createElement("option");
            option.text = status[i];
            option.value = status[i];
            statusSelect.add(option);
        }
        for (var i = 0; i < products.length; i++) {
            var option = document.createElement("option");
            option.text = products[i];
            option.value = products[i];
            productSelect.add(option);
        }
    </script>
    </body>
</html>
