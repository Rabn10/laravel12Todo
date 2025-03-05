import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tasks',
        href: '/tasks',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tasks" />
            <div className="container ms-auto p-4">
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-2xl font-bold'>Tasks</h1>
                    <Link href='/tasks/create' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create Task</Link>
                </div>
                <div className='overflow-x-auto'>
                    <table className='w-full table-auto shadow-lg bg-white dark:bg-neutral-800 rounded-lg'> 
                        <thead>
                            <tr>
                                <th className='px-4 py-2 text-left'>SN</th>
                                <th className='px-4 py-2 text-left'>Title</th>
                                <th className='px-4 py-2 text-left'>Description</th>
                                <th className='px-4 py-2 text-left'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border px-4 py-2'>1</td>
                                <td className='border px-4 py-2'>Task 1</td>
                                <td className='border px-4 py-2'>This is task 1</td>
                                <td className='border px-4 py-2'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
                                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>  


        </AppLayout>
    );
}
