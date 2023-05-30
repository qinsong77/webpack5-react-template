import { useParams } from 'react-router-dom'

export const List = () => {
  const { listId } = useParams()
  return <div>this is article List, id: {listId}</div>
}
