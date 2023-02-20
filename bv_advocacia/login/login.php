<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap"
      rel="stylesheet"
    />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="site de advocacia brenda viriato">
        <meta name="author" content="rosendc30@gmail.com">
        <link rel="icon" href="./../assets/favicon.png">
        <link rel="stylesheet" href="../css/estilo.css"/>

        <title>BV Advocacia</title>      




    </head>

    <body>
        <div class="app">          
            

                <div>          
                    <img src="../assets/ICON_02-removebg-preview.png"/>
                </div>

                <form class="form-signin" method="POST" action="valida.php">


                    <label for="Nome" class="">Nome</label>
                    <input type="text" name="nome" id="Nome" class="form-control" placeholder="Nome" required autofocus />

                    <label for="inputPassword" class="">Senha</label>
                    <input type="password" name="senha" id="inputPassword" class="form-control" placeholder="Senha" required />

                    <button type="submit">
                        <span>Acessar</span>                      
                    </button>
                </form>
                      
        </div> <!-- /app -->

    </body>
</html>