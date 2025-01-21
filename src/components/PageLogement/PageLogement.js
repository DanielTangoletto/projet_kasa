import logements from "../../datas/logements.json";
import { useParams, Navigate } from "react-router-dom";
import Collapse from "../Collapse/Collapse";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Carrousel from "../Carrousel/Carrousel";
import Host from "../Host/Host";

const PageLogement = () => {

  const { id } = useParams();

  const ficheLogement = logements.find((logement) => logement.id === id);

  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {ficheLogement ? (
        <div className="fiche_container">
          <Carrousel slides={ficheLogement?.pictures} />
          <section className="fiche_logement">
            <div className="description_info">
              <div className="description_info_titletags">
                <div className="description_info_titletags_title">
                  <span className="title_logement">{ficheLogement?.title}</span>
                  <span className="location_logement">{ficheLogement?.location}</span>
                </div>

                <div className="description_info_titletags_tags">{tagsLogement}</div>
              </div>

              <div className="description_info_owner">
                <div className="description_info_owner_name">
                  <Host name={ficheLogement?.host.name} picture={ficheLogement?.host.picture} />
                </div>

                <div className="description_info_owner_rate">
                  <Rating score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>

          <div className="description_content">
            <div className="description_content_description">
              <Collapse title="Description" content={ficheLogement?.description} />
            </div>
            <div className="description_content_equipment">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default PageLogement;
