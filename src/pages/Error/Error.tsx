import { useRouteError } from "react-router-dom"

export default function Error() {
  const error = useRouteError();
  console.log("error: ", error);
  return (
    <div>Error</div>
  )
}
