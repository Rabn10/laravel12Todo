<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index() {

        $user = auth()->user()->id;
        return Inertia::render('dashboard', [
            'tasks' => Task::where('user_id', $user)->get(),
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

        return redirect()->route('dashboard');
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

        return redirect()->route('dashboard');
    }

    public function destroy(Task $task) {
        $task->delete();

        return redirect()->route('dashboard');
    }

    public function complete(Task $task) {
        $task->update([
            'completed' => true,
        ]);
        return response()->json($task);

        // return redirect()->route('dashboard');
    }
}
