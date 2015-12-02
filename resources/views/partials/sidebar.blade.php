<aside class="main-sidebar">
    <section class="sidebar">
        <div class="user-panel">
            <div class="pull-left image">
                <img src="{{Auth::user()->getAvatarImageUrl()}}" class="img-circle" alt="{{Auth::user()->name}}">
            </div>
            <div class="pull-left info">
                <p>{{Auth::user()->name}}</p>
                <a href="{{route('user.profile', Auth::user()->uuid)}}"><i class="fa fa-arrow-right"></i> Mi Perfil</a>
            </div>
        </div>
        <ul class="sidebar-menu">
            <li class="header">Menu</li>
        </ul>
        {!! MenuPing::render('sidebar') !!}
        {!! MenuPing::render('config') !!}
    </section>
</aside>
