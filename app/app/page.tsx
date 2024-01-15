"use client";
import { useContext } from "react";
import {
  SwellContext,
  useCustomer,
  useSubscriptions,
  useStore,
} from "@/lib/swell";
import { Aside } from "@/components/Aside";
import { Customer } from "@/components/Customer";
import { Tabs } from "@/components/Tabs";
import { Loading } from "@/components/Loading";

export default function Home() {
  const { isLoading } = useContext(SwellContext);
  const { store } = useStore();
  const { subscriptions, customer } = useSubscriptions();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="flex w-full flex-col overflow-auto lg:h-screen lg:flex-row lg:overflow-y-auto lg:overflow-x-hidden">
      <Aside storeName={store?.store?.name} />
      <div className="flex w-full flex-1 flex-col gap-6 p-12">
        <Customer name={customer?.name} email={customer?.email} />
        <Tabs subscriptions={subscriptions?.results} />
      </div>
    </main>
  );
}
