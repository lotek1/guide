import { useEffect, useContext, useState } from "react";
import styles from "../styles/Guides.module.css";
import AuthContext from "../stores/authContext";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/guides",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("You must be logged in to see the content");
          }
          return res.json();
        })
        .then((data) => {
          setGuides(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading ... </div>}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {guides &&
        guides.map((guide) => (
          <div key={guide.id} className={styles.card}>
            <h3>{guide.title}</h3>
            <h4>Written by: {guide.name}</h4>
            <p style={{ textDecoration: "line-through", color: "#cd886c" }}>
              {guide.job} guide nr: {guide.age}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              velit nemo vero dolore magnam ipsa delectus quia numquam, ratione
              sint fugiat ad impedit ipsam illo recusandae aliquam provident
              quis atque dolore magnam ipsa delectus quia numquam, ratione sint
              fugiat ad impedit ipsam illo recusandae aliquam provident quis
              atque!
            </p>
          </div>
        ))}
    </div>
  );
}
