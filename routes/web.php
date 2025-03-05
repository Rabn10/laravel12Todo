<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TaskController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('dashboard', [TaskController::class, 'index'])->middleware('auth')->name('dashboard');
Route::put('/tasks/completed/{task}', [TaskController::class, 'complete'])->middleware('auth');
Route::resource('tasks', TaskController::class)->middleware('auth');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
