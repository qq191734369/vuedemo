import 'pixi-live2d';
import PIXI from 'pixi.js';


const renderer = new PIXI.WebGLRenderer(800, 600);
document.body.appendChild(renderer.view);
const stage = new PIXI.Container();

const live2dSprite = new PIXI.Live2DSprite(modelHaru);
stage.addChild(live2dSprite);

live2dSprite.startRandomMotion('idle');
live2dSprite.on('mousemove', (evt) => {
  const point = evt.data.global;
  live2dSprite.setViewPoint(point.x, point.y);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}
animate();