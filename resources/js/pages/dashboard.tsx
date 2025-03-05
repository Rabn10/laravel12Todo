import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Tasks',
        href: '/tasks',
    },
];

export default function Dashboard({ tasks }: any) {
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
                            {tasks.map((task : any, index:number ) => (
                                <tr key={task.id}>
                                    <td className='border px-4 py-2'>{index + 1}</td>
                                    <td className='border px-4 py-2'>{task.title}</td>
                                    <td className='border px-4 py-2'>{task.description}</td>
                                    <td className='border px-4 py-2'>
                                        <Link href={`/tasks/${task.id}/edit`} className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Edit</Link>
                                        <Link
                                            href={`/tasks/${task.id}`}
                                            method='delete' 
                                            as='button' 
                                            onClick={(e) => {
                                                if (!confirm('Are you sure you want to delete this task?')) {
                                                    e.preventDefault();
                                                }
                                            }} 
                                            className=' cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2'
                                        >Delete</Link>
                                        <input type="checkbox" className="ml-2 w-5 h-5" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>  


        </AppLayout>
    );
}
