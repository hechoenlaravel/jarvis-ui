var elixir = require('laravel-elixir');
/** Compile the less and JS! **/
elixir(function (mix) {
  mix.less("bootstrap/bootstrap.less");
  mix.less("jarvis-platform.less");
  mix.styles([
    '../plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
    '../plugins/bootstrapSelect/dist/css/bootstrap-select.min.css',
    '../plugins/colorpicker/bootstrap-colorpicker.css',
    '../plugins/datepicker/datepicker3.css',
    '../plugins/daterangepicker/daterangepicker-bs3.css',
    '../plugins/fullcalendar/fullcalendar.css',
    '../plugins/fullcalendar/fullcalendar.print.css',
    '../plugins/morris/morris.css',
    '../plugins/select2/select2.css',
    '../plugins/timepicker/bootstrap-timepicker.min.css',
    '../plugins/sweetalert/dist/sweetalert.css',
    "../../components/angular-loading-bar/build/loading-bar.css",
    "../../components/ng-sortable/dist/ng-sortable.css",
    "../../components/angular-tablesort/tablesort.css",
  ]);
  mix.scripts([
    "../plugins/jquery.js",
    "../plugins/bootstrap.js",
    "../../components/angular/angular.js",
    "../plugins/datatables/jquery.dataTables.min.js",
    "../plugins/datatables/dataTables.bootstrap.js",
    "../plugins/bootstrapSelect/dist/js/bootstrap-select.js",
    "../plugins/bootstrapSelect/dist/js/i18n/defaults-es_CL.js",
    "../plugins/bootbox/bootbox.min.js",
    "../plugins/speakingurl/speakingurl.min.js",
    "../plugins/slugify/dist/slugify.min.js",
    "../plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js",
    "../plugins/datepicker/bootstrap-datepicker.js",
    "../plugins/datepicker/locales/bootstrap-datepicker.es.js",
    "../plugins/daterangepicker/moment.min.js",
    "../plugins/daterangepicker/daterangepicker.js",
    "../plugins/fullcalendar/fullcalendar.min.js",
    "../plugins/slimScroll/jquery.slimscroll.js",
    '../plugins/chartjs/Chart.min.js',
    '../plugins/colorpicker/bootstrap-colorpicker.min.js',
    '../plugins/morris/morris.min.js',
    '../plugins/select2/select2.full.min.js',
    '../plugins/select2/i18n/es.js',
    '../plugins/pace/pace.js',
    '../plugins/timepicker/bootstrap-timepicker.js',
    '../plugins/sweetalert/dist/sweetalert.min.js',
    '../plugins/jsplumb/jsPlumb-2.0.4.js',
    "../../components/angular-animate/angular-animate.js",
    "../../components/angular-loading-bar/build/loading-bar.js",
    "../../components/ng-sortable/dist/ng-sortable.js",
    "../../components/angular-tablesort/js/angular-tablesort.js",
    "../../components/Sortable/Sortable.js",
    "../../components/Sortable/ng-sortable.js",
    "../../components/ng-flow/dist/ng-flow-standalone.min.js",
    "adminlte.js",
    "app.js"
  ]);
});
