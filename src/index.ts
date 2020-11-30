import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  DoubleSide,
  TextureLoader,
  AmbientLight,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshStandardMaterial,
  MeshDepthMaterial,
  MeshNormalMaterial,
  PointLight,
  ObjectLoader,
  LoadingManager,
  PlaneGeometry,
} from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const renderer = new WebGLRenderer();
let currentShape: null | Mesh = null;
const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const init = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.append(renderer.domElement);

  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  spawnNewShape(scene);

  window.addEventListener("keydown", keyHandler);
  camera.position.z = 30;
  camera.position.y = 10;
  // const control = new OrbitControls(camera, renderer.domElement);

  const planeGeometry = new PlaneGeometry(5, 5).rotateX(Math.PI / 2);
  const planeMaterial = new MeshLambertMaterial({
    color: 0x2474f2,
    side: DoubleSide,
  });
  const plane = new Mesh(planeGeometry, planeMaterial);
  scene.add(plane);

  const ambientLight = new AmbientLight(0xffffff, 0.4);
  const pointLight1 = new PointLight(0xffffff, 1, 50);
  pointLight1.position.z = 8;
  pointLight1.position.x = -9;
  pointLight1.position.y = 10;
  const pointLight2 = new PointLight(0xffffff, 1, 50);
  pointLight2.position.z = 10;
  pointLight2.position.x = -10;
  pointLight2.position.y = 10;
  scene.add(ambientLight);
  scene.add(pointLight1);
};

const keyHandler = (e: KeyboardEvent) => {
  switch (e.code) {
    case "ArrowRight":
      if (currentShape.position.x > 2.5) {
        return;
      }
      currentShape.position.x += 0.5;
      break;
    case "ArrowLeft":
      if (currentShape.position.x < -2.5) {
        return;
      }
      currentShape.position.x -= 0.5;
      break;

    default:
      break;
  }
};

const isMovingConditionsOk = (currentShape: null | Mesh) => {
  return currentShape?.position.y > 0;
};

function spawnNewShape(scene: Scene) {
  const boxGeometry = new BoxGeometry(1, 1, 1);
  const cubeMaterial = new MeshLambertMaterial({ color: 0x2474f2 });
  const cube = new Mesh(boxGeometry, cubeMaterial);
  cube.position.y = 10;
  currentShape = cube;
  scene.add(cube);
};

const update = (currentShape: null | Mesh, scene: Scene) => {
  if (isMovingConditionsOk(currentShape)) {
    currentShape.position.y -= 0.01;
  } else {
    spawnNewShape(scene);
  }
};

const render = (renderer: WebGLRenderer, scene: Scene, camera: PerspectiveCamera) => {
  renderer.render(scene, camera);
};

const GameLoop = ({
  renderer,
  scene,
  camera,
}: {
  renderer: WebGLRenderer;
  scene: Scene;
  camera: PerspectiveCamera;
}) => {
  requestAnimationFrame(() => GameLoop({ renderer, scene, camera }));

  update(currentShape, scene);
  render(renderer, scene, camera);
};

init();
GameLoop({ renderer, scene, camera });
