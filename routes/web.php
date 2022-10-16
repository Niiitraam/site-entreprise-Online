<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Projet1Controller;
use App\Http\Controllers\Projet2Controller;
use App\Http\Controllers\Projet3Controller;
use App\Http\Controllers\Projet4Controller;
use App\Http\Controllers\Projet5Controller;
use App\Http\Controllers\HomeController;


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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::resource('/', HomeController::class);

Route::resource('/Isabel-Gomez', Projet1Controller::class);
Route::resource('/Martin-Manderveld', Projet2Controller::class);
Route::resource('/Renovation-DR', Projet3Controller::class);
Route::resource('/Anne-Thiry', Projet4Controller::class);
Route::resource('/M-M', Projet4Controller::class);