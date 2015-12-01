<?php

namespace Hechoenlaravel\JarvisPlatformUi\Providers;

use Illuminate\Support\ServiceProvider;

/**
 * Class JarvisPlatformUiServiceProvider
 * @package Hechoenenlaravel\JarvisPlatformUi\Providers
 */
class JarvisPlatformUiServiceProvider extends ServiceProvider
{

    /**
     * Register package stuff
     */
    public function register()
    {
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'jplatformui');
        $this->publishes([
            __DIR__.'/../../public' => public_path('vendor/jplatformui'),
        ], 'jplatformpublic');
        $this->publishes([
            __DIR__.'/../../resources/views' => base_path('resources/views/vendor/jplatformui')
        ], 'jplatformviews');
    }
}