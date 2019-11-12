/* tslint:disable:max-line-length */
import './blog.scss';

import React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import { showHeader } from 'app/shared/reducers/header';
import { Button, Container, Grid, Image, Menu, Icon } from 'semantic-ui-react';

export class BlogPage extends React.Component<DispatchProps> {
  componentDidMount() {
    this.props.getSession();
    this.props.showHeader();
  }

  render() {
    return (
      <div className="blog-page">
        <h1 className="blog-page-title">Πρόσκληση παρουσίασης του νέου Socioscope.gr</h1>
        <div className="blog-page-divider" />
        <Grid className="blog-page-grid">
          <Grid.Row className="info-row">
            <Grid.Column className="blog-page-col-1">
              <Image className="blog-page-image" src="/content/images/Assets/Calendar.png" />
              <span className="blog-page-question">Πότε;</span>
            </Grid.Column>
            <Grid.Column computer={3} mobile={10} className="blog-page-answer" verticalAlign="middle">
              Τρίτη 19 Νοεμβρίου 2019
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            className="info-row"
            as="a"
            href="https://www.google.com/maps/place/six+d.o.g.s/@37.9774684,23.7268116,15z/data=!4m2!3m1!1s0x0:0x1064e7b168cee196?sa=X&ved=2ahUKEwjerP6JltjlAhUyxaYKHWNmAEoQ_BIwCnoECA8QCA"
            target="_blank"
          >
            <Grid.Column className="blog-page-col-1">
              <Image className="blog-page-image" src="/content/images/Assets/Pin.png" />
              <span className="blog-page-question">Πού;</span>
            </Grid.Column>
            <Grid.Column computer={3} mobile={10} className="blog-page-answer" verticalAlign="middle">
              s.i.x. dogs (Στο Gig Space) Αμβρωτίου 6-8, Αθήνα 105 51
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="info-row">
            <Grid.Column className="blog-page-col-1">
              <Image className="blog-page-image" src="/content/images/Assets/Clock.png" />
              <span className="blog-page-question">Ώρα;</span>
            </Grid.Column>
            <Grid.Column computer={3} mobile={10} className="blog-page-answer" verticalAlign="middle">
              14:00 - 16:00
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Container className="blog-page-description">
          <p>
            Σήμερα όπου η ανάγκη για τεκμηριωμένα δεδομένα είναι πιο επιτακτική από ποτέ, το <span>Socioscope.gr</span> του{' '}
            <span>Εθνικού Κέντρου Κοινωνικών Ερευνών</span>, προσφέρει δεδομένα <span>ανοικτά</span> στο ευρύ κοινό από έρευνες σε ποικίλους
            τομείς της <span>κοινωνικής</span> και <span>πολιτικής</span> ζωής της Ελλάδας
          </p>
          <p>Στην παρουσίαση θα μάθουμε:</p>
          <ul>
            <li>
              <span>πώς να αντλούμε τα δεδομένα</span> που μας ενδιαφέρουν
            </li>
            <li>
              <span>πώς να τα μεταφράζουμε</span> στα πλαίσια της αρθρογραφίας έρευνας
            </li>
            <li>
              <span>πώς να εξάγουμε γραφήματα</span> έτοιμα προς δημοσίευση
            </li>
          </ul>
          <p>
            και όλα αυτά με μια ανοιχτή <span>συζήτηση</span> μεταξύ διοργανωτών και συμμετεχόντων.
          </p>
          <p>Σας περιμένουμε</p>
          <p>
            <span>Μανίνα Κακεπάκη</span> Ερευνήτρια ΙΚΕ-ΕΚΚΕ{' '}
            <span>
              |{' '}
              <a href="mailto:mkapekaki@ekke.gr" target="_blank">
                mkapekaki@ekke.gr
              </a>
            </span>
          </p>
          <p>
            <span>Κατερίνα Ηλιού</span> Ερευνήτρια ΙΚΕ-ΕΚΚΕ{' '}
            <span>
              |{' '}
              <a href="mailto:kiliou@ekke.gr" target="_blank">
                kiliou@ekke.gr
              </a>
            </span>
          </p>
          <Button
            className="blog-page-register"
            as="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLScluDhIE8v956Kuvr0iGceLwSV4nvRUAEPc2ru60HKY6POIng/viewform"
            target="_blank"
          >
            Δηλώστε Συμμετοχή
          </Button>
          <Menu className="blog-page-contact" text borderless style={{ backgroundColor: 'transparent', borderStyle: 'none' }}>
            <Menu.Item as="a" href="https://www.facebook.com/socioscope/" target="_blank">
              <Icon name="facebook official" />
              Socioscope.gr
            </Menu.Item>
            <Menu.Item>
              <Icon name="text telephone" />
              210 7491613
            </Menu.Item>
          </Menu>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = { getSession, showHeader };

type DispatchProps = typeof mapDispatchToProps;

export default connect(
  null,
  mapDispatchToProps
)(BlogPage);
