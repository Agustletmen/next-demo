'use client';

import { useParams } from 'next/navigation';

export default function params() {
    const { id } = useParams();
    return <div className=''>id：{id}</div>
}