import { Avatar } from "@/components/Avatar";
import ArrowLeft from "/public/arrow-left.svg";

interface AsideProps {
  storeName: string;
}

export function Aside(props: AsideProps) {
  const { storeName } = props;

  return (
    <aside className="lg:max-w-55 sticky left-0 top-0 flex flex-col gap-6 bg-[#fafafa] p-12 lg:w-1/3">
      <div className="mb-12">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2 py-1.5 text-xs text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Avatar storeName="Store name" />
        <div className="font-medium text-gray-700">{storeName}</div>
      </div>
      <h1 className="text-3xl font-medium text-gray-900">
        Manage your subscription and billing settings
      </h1>
      <p className="text-sm font-light text-gray-500">
        View payment history, download invoices, and manage subscriptions and
        payment methods.
      </p>
    </aside>
  );
}
