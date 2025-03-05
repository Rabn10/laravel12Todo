<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index() {
        return Inertia::render('tasks/index', [
            'tasks' => Task::with('user')->get(),
        ]);
    }

    public function create() {
        return Inertia::render('tasks/create');
    }

    public function store(Request $request) {

        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'user_id' => auth()->id(),
        ]);

        return redirect()->route('tasks.index');
    }

    public function edit(Task $task) {
        return Inertia::render('tasks/edit', [
            'task' => $task,
        ]);
    }

    public function update(Request $request, Task $task) {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $task->update($request->all());

        return redirect()->route('tasks.index');
    }

    public function destroy(Task $task) {
        $task->delete();

        return redirect()->route('tasks.index');
    }
}
