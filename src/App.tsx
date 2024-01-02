import { Container } from "components/Container";
import { Header } from "components/Header";
import { Content } from "pages/Content";
import { useState } from "react";
function App() {
  const [subject, setSubject] = useState("");

  return (
    <>
      <Container>
        <Content />
      </Container>
    </>
  );
}

export default App;
