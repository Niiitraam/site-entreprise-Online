<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/6434cb6a94.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    
    <title>Main</title>
</head>
<body>
    @include('partial/navbar')
    @include('page/home')
    @include('page/about')
    @include('page/service')

    
    @include('partial/reseau')


    <script src="{{asset('js/main.js')}}"></script>
</body>
</html>