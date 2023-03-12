<script>
import "./app.css";
import {
    Container,
    Row,
    Col

} from 'sveltestrap';
</script>

<Container>
    <Row>
        <Col><slot /></Col>
    </Row>
</Container>
