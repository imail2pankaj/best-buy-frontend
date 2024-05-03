import { Button } from "react-bootstrap";
import { logout } from "../signin/action";

export default function SignOutForm() {

  return (
    <li className="nav-item">
      <form>
        <Button type="submit" className="nav-link" variant="link" formAction={logout}>
          Logout
        </Button>
      </form>
    </li>
  )
}

