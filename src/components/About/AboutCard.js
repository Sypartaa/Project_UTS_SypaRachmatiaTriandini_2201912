import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hallo semuanya Aku <span className="purple">Sypa Rachmatia Triandini </span>
            asal <span className="purple"> Tasikmalaya, Jawa Barat.</span>
            <br />Aku menempuh pendidikan di Universitas Pendidikan Indonesia dan tinggal di Bandung, Indonesia.
            <br />
            Aku mulai terbiasa dengan kesibukan kuliahku dan aku menikmatinya.
            <br />
            <br />
            Hobiku diantaranya
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Menonton film 
            </li>
            <li className="about-activity">
              <ImPointRight /> Membaca Webtoon
            </li>
            <li className="about-activity">
              <ImPointRight /> Mendengarkan musik
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
