// src/Components/Scene3d.js

// Import our dependancies
import React, { Component } from "react";
import { TweenMax, Power2 } from "gsap";
// Destructuring really helps clean up babylon projects
import {
  Scene,
  Engine,
  AssetsManager,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  Color3,
  Tools
} from "babylonjs";
// Here we extend Reacts component class
class Scene3d extends Component {
  colors = {
    red: new Color3(0.5137, 0, 0),
    blue: new Color3(0, 0, 0.5137),
    green: new Color3(0, 0.5137, 0),
    yellow: new Color3(0.5137, 0.5137, 0),
    black: new Color3(0, 0, 0),
    white: new Color3(1, 1, 1),
    grey: new Color3(0.5, 0.5, 0.5)
  };
  /*
   * We add an object which contains a hash table
   * of our regions. These nested objects
   * contain the coordinates we will move
   * the camera to if there key is
   * selected. As well as an id
   * to select individual meshs
   */
  regions = {
    FRONT: {
      id: "Camera",
      alpha: -4.712,
      beta: -3.491,
      radius: 7000
    },
    BACK: {
      id: "Camera",
      alpha: -1.571,
      beta: -0.45,
      radius: 7000
    },
    FLOORPLAN: {
      id: "Camera",
      alpha: -4.712,
      beta: -3.8,
      radius: 7000
    }
  };

  constructor(props) {
    super(props);
    // We bind our events to keep the proper "this" context.
    this.moveCamera = this.moveCamera.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  /*
   *  This function animates the movement of
   *  the camera to our new region.
   */
  moveCamera = (e) => {
    TweenMax.to(this.camera, 1, {
      radius: this.regions[e.detail].radius,
      alpha: this.regions[e.detail].alpha,
      beta: this.regions[e.detail].beta,
      ease: Power2.easeOut
    });
  };

  changeColor = (e) => {
    let mesh = this.scene.getMeshByID(this.regions[e.detail.meshName].id);
    mesh.material = mesh.material.clone();
    TweenMax.to(mesh.material.diffuseColor, 1, {
      r: this.colors[e.detail.color].r,
      g: this.colors[e.detail.color].g,
      b: this.colors[e.detail.color].b
    });
  };
  // Makes the canvas behave responsively
  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  };
  // Sets up our canvas tag for webGL scene
  setEngine = () => {
    this.stage.style.width = "200%";
    this.stage.style.height = "200%";
    this.engine = new Engine(this.stage);
    this.stage.style.width = "100%";
    this.stage.style.height = "100%";
  };
  // Creates the scene graph
  setScene = () => {
    this.scene = new Scene(this.engine);
    /* 
      By default scenes have a blue background here we set 
      it to a cool gray color
    */

    this.scene.clearColor = new Color3(0, 5, 1);
  };
  /* 
     Adds camera to our scene. A scene needs a camera for anything to
     be visible. Also sets up rotation Controls
  */
  setCamera = () => {
    this.camera = new ArcRotateCamera(
      "Camera",
      Math.PI * -1.5,
      Tools.ToRadians(-200),
      0,
      new Vector3(1000, -500, 500),
      this.scene
    );
    this.camera.attachControl(this.stage, true);
    this.camera.lowerRadiusLimit = 7000;
    this.camera.upperRadiusLimit = 300000;
    this.camera.lowerBetaLimit = this.camera.beta - Tools.ToRadians(180);
    this.camera.upperBetaLimit = this.camera.beta + Tools.ToRadians(180);
    this.camera.lowerAlphaLimit = this.camera.alpha - Tools.ToRadians(180);
    this.camera.upperAlphaLimit = this.camera.alpha + Tools.ToRadians(180);
  };

  loadModels = () => {
    /*
     * the AssetManager class is responsible
     * for loading files
     */

    let loader = new AssetsManager(this.scene);
    // Arguments: "ID", "Root URL", "URL Prefix", "Filename"
    let loadBikeModel = loader.addMeshTask(
      "bike",
      "",
      "",
      "domek_final.babylon"
    );
    /*
     *  Loader is given a callback to run when the model has loaded
     *  the variable t is our imported scene. You can use
     *  it to examine all the mesh's loaded.
     */

    loadBikeModel.onSuccess = (t) => {
      this.scene.getMeshByID("Solid1").material = this.scene
        .getMeshByID("Solid1")
        .material.clone();
      this.scene.getMeshByID("Těleso1").material = this.scene
        .getMeshByID("Těleso1")
        .material.clone();
      this.scene.getMeshByID("Těleso1:1").material = this.scene
        .getMeshByID("Těleso1:1")
        .material.clone();
      this.scene.getMeshByID("Těleso1:10").material = this.scene
        .getMeshByID("Těleso1:10")
        .material.clone();
      this.scene.getMeshByID("Těleso1:11").material = this.scene
        .getMeshByID("Těleso1:11")
        .material.clone();
      this.scene.getMeshByID("Těleso1:12").material = this.scene
        .getMeshByID("Těleso1:12")
        .material.clone();
      this.scene.getMeshByID("Těleso1:13").material = this.scene
        .getMeshByID("Těleso1:13")
        .material.clone();
      this.scene.getMeshByID("Těleso1:14").material = this.scene
        .getMeshByID("Těleso1:14")
        .material.clone();
      this.scene.getMeshByID("Těleso1:15").material = this.scene
        .getMeshByID("Těleso1:15")
        .material.clone();
      this.scene.getMeshByID("Těleso1:16").material = this.scene
        .getMeshByID("Těleso1:16")
        .material.clone();
      this.scene.getMeshByID("Těleso1:17").material = this.scene
        .getMeshByID("Těleso1:17")
        .material.clone();
      this.scene.getMeshByID("Těleso1:18").material = this.scene
        .getMeshByID("Těleso1:18")
        .material.clone();
      this.scene.getMeshByID("Těleso1:2").material = this.scene
        .getMeshByID("Těleso1:2")
        .material.clone();
      this.scene.getMeshByID("Těleso1:3").material = this.scene
        .getMeshByID("Těleso1:3")
        .material.clone();
      this.scene.getMeshByID("Těleso1:4").material = this.scene
        .getMeshByID("Těleso1:4")
        .material.clone();
      this.scene.getMeshByID("Těleso1:5").material = this.scene
        .getMeshByID("Těleso1:5")
        .material.clone();
      this.scene.getMeshByID("Těleso1:6").material = this.scene
        .getMeshByID("Těleso1:6")
        .material.clone();
      this.scene.getMeshByID("Těleso1:7").material = this.scene
        .getMeshByID("Těleso1:7")
        .material.clone();
      this.scene.getMeshByID("Těleso1:8").material = this.scene
        .getMeshByID("Těleso1:8")
        .material.clone();
      this.scene.getMeshByID("Těleso1:9").material = this.scene
        .getMeshByID("Těleso1:9")
        .material.clone();

      this.scene.getMeshByID("Solid1").visibility = 0.5;

      this.scene.getMeshByID("Solid1").material.diffuseColor = this.colors[
        "white"
      ];
      this.scene.getMeshByID("Těleso1").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:1").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:10").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:11").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:12").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:13").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:14").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:15").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:16").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:17").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:18").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:2").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:3").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:4").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:5").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:6").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:7").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:8").material.diffuseColor = this.colors[
        "grey"
      ];
      this.scene.getMeshByID("Těleso1:9").material.diffuseColor = this.colors[
        "grey"
      ];

      // Start the animation loop once the model is loaded
      this.engine.runRenderLoop(() => {
        this.scene.render();
        this.scene.debugLayer.show();
      });

      // The model came in a little dark so lets add some extra light
      new HemisphericLight("light1", new Vector3(0, 1, 0), this.scene);
    };

    // It also calls an Error callback if something goes wrong
    loadBikeModel.onError = function (task, message, exception) {
      console.log(message, exception);
    };
    // We return the fully configured loader
    return loader;
  };

  //Build the scene when the component has been loaded.
  componentDidMount() {
    this.setEngine();
    this.setScene();
    this.setCamera();
    /*
     *  the loader we return has a load method
     *  attached that will initiate everything.
     */
    this.loadModels().load();
    window.addEventListener("resize", this.onResizeWindow);
    // We can add our custom events just like any other DOM event
    window.addEventListener("move-camera", this.moveCamera);
    window.addEventListener("change-color", this.changeColor);
  }
  //Renderes our Canvas tag and saves a reference to it.
  render() {
    return <canvas className="scene" ref={(el) => (this.stage = el)}></canvas>;
  }
}

//returns the scene to be used by other components
export default Scene3d;
