<html>
    <head>
        <title>Belajar Client Side Scripting</title>
        <script> type="text/javascript"> 
        function validasi()
        {
            if(form_register.nama.value == '')
            {
                alert("Masukan Nama");
            }
            else
            {
                alert("Selamat Datang " + form_register.nama.value);
            }
        }
        </script>
    </head>
    <body>
        <form name="form_register">
            <input type="text" name="nama"> 
            <input type="submit" onclick="validasi()">
        </form>
    </body>
</html>