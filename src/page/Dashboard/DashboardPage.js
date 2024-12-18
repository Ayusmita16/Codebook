import React, { useEffect, useState } from 'react'
import { DashboardCard } from './components/DashboardCard'
import { toast } from "react-toastify";
import { DashboardEmpy } from './components/DashboardEmpy'
import { getOrders } from '../../services/DataService';

export function DashboardPage(props) {
    const [orders, setOrder] = useState({});

    useEffect(() => {
        async function fetchOrders() {
            try {
                const orders = await getOrders();
                setOrder(orders)
            } catch (error) {
                toast.error(error.message, { closeButton: true, position: 'bottom-centre', closeOnClick: true })
            }
        }
        fetchOrders()
    }, [])

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
            </section>

            <section>
                {orders.length && orders.map((order) => (
                    <DashboardCard key={order.id} order={order} />
                ))}
            </section>

            <section>
                {!orders.length && <DashboardEmpy />}
            </section>

        </main>
    )
}
