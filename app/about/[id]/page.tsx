'use client';

import { useParams } from 'next/navigation';

export default function Params() {
    const { id } = useParams();
    return <div className=''>id：{id}</div>
}