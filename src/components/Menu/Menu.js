import React, { Component } from "react";
import MenuCard from "./menucard";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "./index.module.css";
import Data from "./menu.json"
import Entree from "./entree.jpg"; //this can be replaced with json file
import Logo from "./food.jpg"; //this can be replaced with json file
import Appe from "./Appe.png"; //this can be replaced with json file
import BackCard from "./backcard";
export default class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.onNavLinkSelected = this.onNavLinkSelected.bind(this);
    this.state = {
      TopMenuItems: Data.topMenuItems,
      reviewTab: 1,
    };
  }

  onNavLinkSelected = (reviewTab) => {
    this.setState({
      reviewTab: reviewTab,
    });
  };

  render() {
    console.log(this.state.TopMenuItems);
    return (
      <div style={{height : "80vh"}}> 
        <Navbar bg="none" className="mb-2" expand="xl">
          <Navbar.Brand className="font-lora font-weight-bold">
            Menu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mt-auto">
            <Nav className="mr-auto">
              <div
                className={
                  this.state.reviewTab === 1
                    ? "a-underline active"
                    : "a-underline"
                }
              >
                <Nav.Link
                  className="text-uppercase"
                  onClick={() => this.onNavLinkSelected(1)}
                >
                  Entree
                </Nav.Link>
              </div>
              <div
                className={
                  this.state.reviewTab === 2
                    ? "a-underline active"
                    : "a-underline"
                }
              >
                <Nav.Link
                  className="text-uppercase"
                  onClick={() => this.onNavLinkSelected(2)}
                >
                  Appetizer
                </Nav.Link>
              </div>
              <div
                className={
                  this.state.reviewTab === 3
                    ? "a-underline active"
                    : "a-underline"
                }
              >
                <Nav.Link
                  className="text-uppercase"
                  onClick={() => this.onNavLinkSelected(3)}
                >
                  Dessert
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
          <div className="w-100 d-xl-none"></div>
        </Navbar>
        <div>
          {this.state.reviewTab === 1 && (
            <div
              className={styles.cardset}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div className={styles.container}>
                <div className={styles.card}>
                  <div className={styles.front}>
                    <MenuCard
                      data={this.state.TopMenuItems}
                      img={Entree}
                      alt={"food"}
                      name={"Hawaiian-Style Steak"}
                      price={"$30.00"}
                    />
                  </div>
                  <div className={styles.back}>
                    <BackCard
                      title={"Hawaiian-Style Steak"}
                      description={
                        "Marinated in a delectable mix of pineapple juice, fresh ginger, garlic, and tamari soy sauce, these amazing grilled steaks are tender."
                      }
                      rating={"3.6"}
                      calories={"234"}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.card}>
                  <div className={styles.front}>
                    <MenuCard
                      img={Entree}
                      alt={"food"}
                      name={"Hawaiian-Style Steak"}
                      price={"$30.00"}
                    />
                  </div>
                  <div className={styles.back}>
                    <BackCard
                      title={"Hawaiian-Style Steak"}
                      description={
                        "Marinated in a delectable mix of pineapple juice, fresh ginger, garlic, and tamari soy sauce, these amazing grilled steaks are tender."
                      }
                      rating={"3.6"}
                      calories={"234"}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {this.state.reviewTab === 2 && (
            <div
              className={styles.cardset}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div className={styles.container}>
                <div className={styles.card}>
                  <div className={styles.front}>
                    <MenuCard
                      img={Appe}
                      alt={"food"}
                      name={"Spicy Carribean Shrimp"}
                      price={"$25.00"}
                    />
                  </div>
                  <div className={styles.back}>
                    <BackCard
                      title={"Hawaiian-Style Steak"}
                      description={
                        "Marinated in a delectable mix of pineapple juice, fresh ginger, garlic, and tamari soy sauce, these amazing grilled steaks are tender."
                      }
                      rating={"3.6"}
                      calories={"234"}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {this.state.reviewTab === 3 && (
            <div
              className={styles.cardset}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div className={styles.container}>
                <div className={styles.card}>
                  <div className={styles.front}>
                    <MenuCard
                      img={Logo}
                      alt={"food"}
                      name={"HungryJack Butter Milk Pancake"}
                      price={"$30.00"}
                    />
                  </div>
                  <div className={styles.back}>
                    <BackCard
                      title={"Hawaiian-Style Steak"}
                      description={
                        "Marinated in a delectable mix of pineapple juice, fresh ginger, garlic, and tamari soy sauce, these amazing grilled steaks are tender."
                      }
                      rating={"3.6"}
                      calories={"234"}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
