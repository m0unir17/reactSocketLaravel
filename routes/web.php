<?php

use Illuminate\Support\Facades\Route;
use \App\Events\Hello;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/{any}','app')->where('any','.*');
//
//Route::get('/', function () {
//    return view('welcome');
//});
//
//
//Route::post('/test',[App\Http\Controllers\TestController::class,'test']);
//

//
Auth::routes();
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
