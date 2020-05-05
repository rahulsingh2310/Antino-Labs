import React from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import NavExample from "./navbar";

export default function Home() {
  return (
    <div>
    <NavExample/>
    <Container className="mt-5">

    <Col className="mt-5">
    <Row className="mt-5">
    <Col lg={{ size: 4, offset: 2 }}>

    <Card style={{ maxWidth: "300px", height:"400px" }}>


      <CardBody>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CardTitle>Complete Ids</CardTitle>
      </CardBody>
      <CardFooter><Button href="/completeids"  >continue &rarr; </Button></CardFooter>

    </Card>
    </Col>

    <Col lg="6">

        <Card style={{ maxWidth: "300px",height:"400px" }}>



      <CardBody>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <CardTitle>Incomplete Ids</CardTitle>

      </CardBody>
      <CardFooter><Button href="/incompleteids"  >continue &rarr; </Button></CardFooter>
    </Card>
    </Col>
    </Row>
    </Col>
    </Container>
    </div>
  );
}
