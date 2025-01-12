export function PageTitle({ text }: { text: string }) {
  return (
    <>
      <h1 className="text-gray-900 text-xl self-center"><strong>{text}</strong></h1>
    </>
  );
}