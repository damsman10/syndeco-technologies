import { useParams } from 'react-router-dom';

export default function Project() {
  const { id } = useParams();
  return (
    <div>
      <h2>Project: {id}</h2>
      <p>This is the detail page for project with ID: {id}</p>
    </div>
  );
}
