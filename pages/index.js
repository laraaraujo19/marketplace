import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Banner from "../public/imgs/cara3.png";
import HomeStoreList from "../components/HomeStoreList";

export default function Home() {
  return (
    <>
      <Row>
        <Col
          md={6}
          style={{ borderRadius: "24px", backgroundColor: "#2596be" }}
        >
          <Row className="text-white align-items-center mt-3">
            <Col>
              <Image src={Banner} />
            </Col>
            <Col>
              <h2>O MarketPlace</h2>
              <h3>Venha vender com a gente :D</h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
