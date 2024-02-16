import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GroupList from './Partials/GroupList';

export default function Index({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Home" />
            
            <div className='grid lg:grid-cols-12 gap-3 h-full mt-4'>
                <div className='lg:col-span-3 lg:order-1 h-full overflow-hidden'>
                    <GroupList />
                </div>
                <div className='lg:col-span-6 lg:order-2 h-full overflow-hidden flex flex-col'>
                    2
                </div>
                <div className='lg:col-span-3 lg:order-3 h-full overflow-hidden'>
                    3
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
