import React, { Component } from "react";

class Glasses extends Component {
  state = {
    name: "GUCCI G8759H",
    price: "$50",
    glassImg: "./img/v2.png",
  };

  handleChoiceGlass(glass) {
    const glassUrl = {
      v1: {
        nameGlass: "GUCCI G8850U",
        priceGlass: "$30",
        urlGlass: "./img/v1.png",
      },
      v2: {
        nameGlass: "GUCCI G8759H",
        priceGlass: "$50",
        urlGlass: "./img/v2.png",
      },
      v3: {
        nameGlass: "DIOR D6700HQ",
        priceGlass: "$30",
        urlGlass: "./img/v3.png",
      },
      v4: {
        nameGlass: "DIOR D6005U",
        priceGlass: "$30",
        urlGlass: "./img/v4.png",
      },
      v5: {
        nameGlass: "PRADA P8750",
        priceGlass: "$30",
        urlGlass: "./img/v5.png",
      },
      v6: {
        nameGlass: "PRADA P9700",
        priceGlass: "$30",
        urlGlass: "./img/v6.png",
      },
      v7: {
        nameGlass: "FENDI F8750",
        priceGlass: "$30",
        urlGlass: "./img/v7.png",
      },
      v8: {
        nameGlass: "FENDI F8500",
        priceGlass: "$30",
        urlGlass: "./img/v8.png",
      },
      v9: {
        nameGlass: "FENDI F4300",
        priceGlass: "$30",
        urlGlass: "./img/v9.png",
      },
    };

    this.setState({
      name: glassUrl[glass].nameGlass,
      price: glassUrl[glass].priceGlass,
      glassImg: glassUrl[glass].urlGlass,
    });
  }

  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <div
                  className="card text-left"
                  style={{ width: 300, position: "relative" }}
                >
                  <img
                    className="card-img-top"
                    src="./img/model.jpg"
                    alt="hinh model"
                  />
                  <img
                    src={this.state.glassImg}
                    alt="kinh"
                    style={{
                      width: 170,
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "16%",
                    }}
                  />
                  <div className="card-body">
                    <span className="card-title badge-danger h3 px-2 rounded">
                      {this.state.price}
                    </span>
                    <p className="card-text mt-2">{this.state.name}</p>
                  </div>
                </div>
              </section>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                <div className="col-3">
                  <button className="btn btn-outline-secondary">
                    <img
                      src="./img/v1.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                      onClick={() => this.handleChoiceGlass("v1")}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-secondary">
                    <img
                      src="./img/v2.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                      onClick={() => this.handleChoiceGlass("v2")}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-secondary">
                    <img
                      src="./img/v3.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                      onClick={() => this.handleChoiceGlass("v3")}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-secondary">
                    <img
                      src="./img/v4.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                      onClick={() => this.handleChoiceGlass("v4")}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-secondary">
                    <img
                      src="./img/v5.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                      onClick={() => this.handleChoiceGlass("v5")}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-secondary">
                    <img
                      src="./img/v6.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                      onClick={() => this.handleChoiceGlass("v6")}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-secondary">
                    <img
                      src="./img/v7.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                      onClick={() => this.handleChoiceGlass("v7")}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-secondary">
                    <img
                      src="./img/v8.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                      onClick={() => this.handleChoiceGlass("v8")}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button className="btn btn-outline-secondary">
                    <img
                      src="./img/v9.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                      onClick={() => this.handleChoiceGlass("v9")}
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Glasses;
