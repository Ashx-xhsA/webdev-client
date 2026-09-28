export default function CoursePage({
  params,
}: Readonly<{ params: { cid: string } }>) {
  return (
    <div>
      <h1>Course Page</h1>
      <p>Course ID: {params.cid}</p>
    </div>
  );
}
