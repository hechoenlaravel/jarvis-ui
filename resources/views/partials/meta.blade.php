<title>@yield('pageTitle')</title>
<link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet">
<link href="{{ asset('css/all.css') }}" rel="stylesheet">
<link href="{{ asset('css/jarvis-platform.css') }}" rel="stylesheet">
@yield('styles')
<link href="{{asset('vendor/image-manager/css/imagemanager.css')}}" rel="stylesheet">
<link href="{{asset('vendor/image-manager/vendors/colorbox/colorbox.css')}}" rel="stylesheet">
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
<script>
    var GLOBALS = {
        site_url: '{{url()}}',
        datablesLang: '//cdn.datatables.net/plug-ins/1.10.7/i18n/Spanish.json',
        token: "{{csrf_token()}}"
    };
</script>