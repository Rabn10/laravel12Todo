import AppLayout from "@/layouts/app-layout";
import appLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Task',
        href: '/tasks/edit',
    },
];

export default function Edit({task }: any) {

    const {data, setData, errors, put, reset, processing} = useForm({
        title: task.title,
        description: task.description
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('tasks.update', task.id), {
            onSuccess: () => {
                reset();
            }
        });
    }


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Task" />
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Eidt Task</h1>
                    <Link href="/tasks" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</Link>
                </div>
                <form onSubmit={submit} method="post">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" id="title" name="title" value={data.title} onChange={(e) => setData('title', e.target.value)}  
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none
                         focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea id="description" name="description" value={data.description} onChange={(e) => setData('description', e.target.value)} 
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none 
                        focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                    </div>
                    <div className="mb-4">
                        <button type="submit" className="cursor-pointer bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600">
                            {processing ? 'Updating...' : 'update task'}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    )
}