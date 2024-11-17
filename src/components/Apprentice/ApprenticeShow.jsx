export function ApprenticeShow({ photo }) {
  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {photo.name}</p>
      <p>Url: {photo.url}</p>
      <p>Width: {photo.width}</p>
      <p>Height: {photo.height}</p>
    </div>
  );
}