import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    
      <div className="errorComponent">
        <p className="errorComponent_404">404</p>
        <p className="errorComponent_txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className="errorComponent_link">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    
  );
}