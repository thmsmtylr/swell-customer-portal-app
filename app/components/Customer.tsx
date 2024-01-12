interface CustomerProps {
  name: string;
  email: string;
}

export function Customer(props: CustomerProps) {
  const { name, email } = props;
  return (
    <div className="mx-auto flex-grow-0 text-center">
      <h2 className="text-4xl font-medium text-gray-900">{name}</h2>
      <p className="text-xl text-gray-600">{email}</p>
    </div>
  );
}
