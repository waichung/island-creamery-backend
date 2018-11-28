import THREE from 'three';

/**
 * @class Render
 */
export default class Render {


    constructor(container) {

        if(!container) throw Error('No container passed to the render class');

        this.container = container;

        console.log(THREE);

        // Scene
        this.SCENE = null;
        this.CAMERA = null;
        this.FOV = null;
        this.ASPECT_RATIO = null;
        this.NEAR_PLANE = null;
        this.FAR_PLANE = null;
        this.RENDERER = null;
        this.BLOOM_MESH = null;
        this.BLOOM = null;
        this.DEFAULT_ROTATION_X = null;

        this.TEXTURE_LOADER = new THREE.TextureLoader();

        // Values
        this.HEIGHT = this.container.innerWidth;
        this.WIDTH = this.container.innerHeight;
        this.WIN_SIZE = {
            x: 1,
            y: 1
        };

        // Mouse
        this.MOUSE_POS = {};
        this.TOUCH_POS = false;

        this.AMBIENT_LIGHT = null;
        this.HEMISPHERE_LIGHT = null;
        this.SHADOW_LIGHT = null;
        this.CAMERA_LIGHT = null;

        this.oldTime = Date.now();

        this.Bloom = function() {
            this.mesh = new THREE.Object3D();
            this.mesh.name = 'airPlane';
            this.mesh.add(this.BLOOM_MESH);
        };

        window.addEventListener('resize', this.onResize.bind(this), false);

    }

    loop() {

        let newTime = Date.now();
        let deltaTime = newTime-oldTime;

        this.oldTime = newTime;

        this.AMBIENT_LIGHT.intensity += ( .5 - this.AMBIENT_LIGHT.intensity ) * deltaTime * 0.005;

        this.RENDERER.clear();
        this.RENDERER.render(scene, camera);

        window.requestAnimationFrame(this.loop.bind(this));

    }

    normalize(v, vmin, vmax, tmin, tmax){

        let nv = Math.max(Math.min(v, vmax), vmin);
        let dv = vmax - vmin;
        let pc = (nv - vmin) / dv;
        let dt = tmax - tmin;
        let tv = tmin + ( pc * dt);

        return tv;

    }

    loadJSON(meshData, callback, onerror) {

        let loader1 = new THREE.JSONLoader();

        loader1.load(meshData.url, function(geom) {

            let mat = new THREE.MeshPhongMaterial({
                color: meshData.color,
                shininess: 100,
                wireframe: true,
            });

            callback(new THREE.Mesh(geom, mat));

        }, undefined, function() {
            if(onerror) onerror();
        });

    }

    loadJSONFiles(meshes, callback, onerror) {

        if(meshes && callback) {
            let obj = new THREE.Object3D();

            if(meshes.length > 0) {

                let count = 0;
                let addMesh = function(mesh) {

                    obj.add(mesh);
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;

                    if (++count === meshes.length) callback(obj);

                };

                for (var i = 0; i < meshes.length; i++) {
                    this.loadJSON(meshes[i], addMesh, onerror);
                }

            }

        } else callback(obj);

    }

    start() {

        this.createScene();
        this.setupLights();
        this.createBloom();

        this.container.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
        document.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
        document.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
        document.addEventListener('touchend', this.handleTouchEndCancel.bind(this), false);
        document.addEventListener('touchcancel', this.handleTouchEndCancel.bind(this), false);

        this.loop();
    }

    init(event) {

      this.WIN_SIZE.x = window.innerWidth;
      this.WIN_SIZE.y = window.innerHeight;

      var mesh = [ { url: 'http://www.nestbloom.com/wp-content/themes/bazaar/assets/bloom.json', color:0xeeeeee } ];

      loadJSONFiles(mesh, function(obj) {

        this.BLOOM_MESH = obj;
        this.BLOOM_MESH.scale.set(10, 10, 10);
        obj.rotation.x = defaultRotationX = .85;

        this.start();

      }, function() {

        this.GEOMETRY = new THREE.SphereGeometry( 12, 15, 15 );
        this.MATERIAL = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe:true} );
        this.LOOM_MESH = new THREE.Mesh( this.GEOMETRY, this.MATERIAL );

        this.start();

      });

    }

    createBloom() {

        this.bloom = new Bloom();
        this.bloom.mesh.scale.set(.25,.25,.25);
        this.bloom.mesh.position.y = 100;

        this.SCENE.add(this.bloom.mesh);

    }


    onResize() {

        this.WIDTH = this.container.innerWidth;
        this.HEIGHT = this.container.innerHeight;

        this.RENDERER.setSize(Math.round(this.WIDTH * Math.max(1, Math.min(2, window.devicePixelRatio))), Math.round(this.HEIGHT * Math.max(1, Math.min(2, window.devicePixelRatio))));
        this.CAMERA.aspect = this.WIDTH / this.HEIGHT;
        this.CAMERA.updateProjectionMatrix();

        this.WIN_SIZE.x = window.innerWidth;
        this.WIN_SIZE.y = window.innerHeight;

    }

    handleMouseDown(event) {

        event.preventDefault();

        const tx = -1 + (event.clientX / this.WIDTH) * 2;
        const ty = -1 + (event.clientY / this.HEIGHT) * 2;

        this.MOUSE_POS = {
            x: tx,
            y: ty
        };

    }

    handleTouchStart(event) {

        if (event.touches.length == 1) {

            event.preventDefault();

            const tx = -1 + (event.touches[0].pageX / this.WIDTH) * 2;
            const ty = -1 + (event.touches[0].pageY / this.HEIGHT) * 2;

            this.TOUCH_POS = {
                x:tx,
                y:ty
            };

        } else {
            this.TOUCH_POS = false;
        }

    }


    handleMouseMove() {

        const mx = (event.pageX - (window.pageXOffset || window.scrollX)) / winSize.x - 0.5;
        const my = (event.pageY - (window.pageYOffset || window.scrollY)) / winSize.y - 0.5;

        this.BLOOM_MESH.rotation.y = mx * 1.25;
        this.BLOOM_MESH.rotation.x = this.DEFAULT_ROTATION_X + my;

    }


    handleTouchMove() {

        if(this.TOUCH_POS) {

            event.preventDefault();

            const tx = -1 + (event.touches[0].pageX / this.WIDTH) * 2;
            const ty = -1 + (event.touches[0].pageY / this.HEIGHT) * 2;

            const mx = tx - this.TOUCH_POS.x;
            const my = ty - this.TOUCH_POS.y;

            this.TOUCH_POS.x = tx;
            this.TOUCH_POS.y = ty;

            this.BLOOM_MESH.rotation.y += mx;
            this.BLOOM_MESH.rotation.x += my;

        }

    }


    handleMouseUp(event) {
      this.MOUSE_POS = false;
    }


    handleTouchEndCancel(event) {
      this.TOUCH_POS = false;
    }


    createScene() {

        this.HEIGHT = this.container.offsetHeight;
        this.WIDTH = this.container.offsetWidth;

        this.SCENE = new THREE.Scene();

        this.ASPECT_RATIO = this.WIDTH / this.HEIGHT;
        this.FOV = 50;
        this.NEAR_PLANE = .1;
        this.FAR_PLANE = 10000;
        this.CAMERA = new THREE.PerspectiveCamera(this.FOV, this.ASPECT_RATIO, this.NEAR_PLANE, this.FAR_PLANE);

        this.SCENE.fog = new THREE.Fog(0x888888, 100,1400);
        this.CAMERA.position.x = 0;
        this.CAMERA.position.z = 8;
        this.CAMERA.position.y = 100;

        this.RENDERER = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.RENDERER.setSize(Math.round(this.WIDTH * Math.max(1, Math.min(2, window.devicePixelRatio))), Math.round(this.HEIGHT * Math.max(1, Math.min(2, window.devicePixelRatio))));
        this.RENDERER.autoClear = false;
        this.RENDERER.shadowMap.enabled = true;

        this.container.insertBefore(renderer.domElement, container.firstChild);

    }


    setupLights() {

        this.HEMISPHERE_LIGHT = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9);

        this.AMBIENT_LIGHT = new THREE.AmbientLight(0xb5bdea, 1);

        this.CAMERA_LIGHT = new THREE.DirectionalLight(0xaaaaaa, .5);
        this.CAMERA_LIGHT.position.set(250, 100, 50);

        this.SHADOW_LIGHT = new THREE.DirectionalLight(0xffffff, .3);
        this.SHADOW_LIGHT.position.set(150, 350, 350);
        this.SHADOW_LIGHT.castShadow = true;
        this.SHADOW_LIGHT.shadow.camera.left = -400;
        this.SHADOW_LIGHT.shadow.camera.right = 400;
        this.SHADOW_LIGHT.shadow.camera.top = 400;
        this.SHADOW_LIGHT.shadow.camera.bottom = -400;
        this.SHADOW_LIGHT.shadow.camera.near = 1;
        this.SHADOW_LIGHT.shadow.camera.far = 1000;
        this.SHADOW_LIGHT.shadow.mapSize.width = 4096;
        this.SHADOW_LIGHT.shadow.mapSize.height = 4096;

        scene.add(this.HEMISPHERE_LIGHT);
        scene.add(this.SHADOW_LIGHT);
        scene.add(this.CAMERA_LIGHT);
        scene.add(this.AMBIENT_LIGHT);

    }


}

// 'use strict';
//
// (function(){
//   var container = document.getElementById('bloom-3d');
//   if (!container) return;
//
//   //THREEJS RELATED VARIABLES
//
//   var scene, camera, fieldOfView, aspectRatio, nearPlane, farPlane,
//       renderer, bloomMesh, bloom, oldTime = Date.now(),
//       textureLoader = new THREE.TextureLoader();
//
//   //SCREEN & MOUSE VARIABLES
//
//   var HEIGHT, WIDTH, defaultRotationX,
//       winSize = {x:1,y:1},
//       mousePos = false,
//       touchPos = {x:0,y:0};
//
//   // MOUSE AND SCREEN EVENTS
//
//   function handleWindowResize() {
//     HEIGHT = container.offsetHeight;
//     WIDTH = container.offsetWidth;
//     renderer.setSize(Math.round(WIDTH * Math.max(1, Math.min(2, window.devicePixelRatio))), Math.round(HEIGHT * Math.max(1, Math.min(2, window.devicePixelRatio))));
//     camera.aspect = WIDTH / HEIGHT;
//     camera.updateProjectionMatrix();
//     winSize.x = window.innerWidth;
//     winSize.y = window.innerHeight;
//   }
//
//   function handleMouseDown(event) {
//     event.preventDefault();
//     var tx = -1 + (event.clientX / WIDTH)*2;
//     var ty = -1 + (event.clientY / HEIGHT)*2;
//     mousePos = {x:tx, y:ty};
//   }
//
//   function handleTouchStart(event) {
//     if (event.touches.length == 1) {
//       event.preventDefault();
//       var tx = -1 + (event.touches[0].pageX / WIDTH)*2;
//       var ty = -1 + (event.touches[0].pageY / HEIGHT)*2;
//       touchPos = {x:tx, y:ty};
//     }
//     else {
//       touchPos = false;
//     }
//   }
//
//   function handleMouseMove(event) {
//     // if (mousePos) {
//       var mx = (event.pageX - (window.pageXOffset || window.scrollX)) / winSize.x - 0.5;
//       var my = (event.pageY - (window.pageYOffset || window.scrollY)) / winSize.y - 0.5;
//       bloomMesh.rotation.y = mx*1.25;
//       bloomMesh.rotation.x = defaultRotationX + my;
//
//     // }
//   }
//
//   function handleTouchMove(event) {
//     if (touchPos) {
//       event.preventDefault();
//       var tx = -1 + (event.touches[0].pageX / WIDTH)*2;
//       var ty = -1 + (event.touches[0].pageY / HEIGHT)*2;
//       var mx = tx-touchPos.x;
//       var my = ty-touchPos.y;
//       touchPos.x = tx;
//       touchPos.y = ty;
//       bloomMesh.rotation.y += mx;
//       bloomMesh.rotation.x += my;
//     }
//   }
//
//   function handleMouseUp(event){
//     mousePos = false;
//   }
//
//   function handleTouchEndCancel(event){
//     touchPos = false;
//   }
//
//   function createScene() {
//
//     HEIGHT = container.offsetHeight;
//     WIDTH = container.offsetWidth;
//
//     scene = new THREE.Scene();
//
//     aspectRatio = WIDTH / HEIGHT;
//     fieldOfView = 50;
//     nearPlane = .1;
//     farPlane = 10000;
//     camera = new THREE.PerspectiveCamera(
//       fieldOfView,
//       aspectRatio,
//       nearPlane,
//       farPlane
//       );
//     scene.fog = new THREE.Fog(0x888888, 100,1400);
//     camera.position.x = 0;
//     camera.position.z = 8;
//     camera.position.y = 100;
//
//     renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setSize(Math.round(WIDTH * Math.max(1, Math.min(2, window.devicePixelRatio))), Math.round(HEIGHT * Math.max(1, Math.min(2, window.devicePixelRatio))));
//
//     renderer.autoClear = false;
//     renderer.shadowMap.enabled = true;
//
//     container.insertBefore(renderer.domElement, container.firstChild);
//
//     window.addEventListener('resize', handleWindowResize, false);
//   }
//
//   // LIGHTS
//
//   var ambientLight, hemisphereLight, shadowLight, cameraLight;
//
//   function letThereBeLights() {
//
//     hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9);
//
//     ambientLight = new THREE.AmbientLight(0xb5bdea, 1);
//
//     cameraLight = new THREE.DirectionalLight(0xaaaaaa, .5);
//     cameraLight.position.set(250, 100, 50);
//
//     shadowLight = new THREE.DirectionalLight(0xffffff, .3);
//     shadowLight.position.set(150, 350, 350);
//     shadowLight.castShadow = true;
//     shadowLight.shadow.camera.left = -400;
//     shadowLight.shadow.camera.right = 400;
//     shadowLight.shadow.camera.top = 400;
//     shadowLight.shadow.camera.bottom = -400;
//     shadowLight.shadow.camera.near = 1;
//     shadowLight.shadow.camera.far = 1000;
//     shadowLight.shadow.mapSize.width = 4096;
//     shadowLight.shadow.mapSize.height = 4096;
//
//     scene.add(hemisphereLight);
//     scene.add(shadowLight);
//     scene.add(cameraLight);
//     scene.add(ambientLight);
//   }
//
//
//
//
//
//   // 3D Models
//
//   function createBloom(){
//     bloom = new Bloom();
//     bloom.mesh.scale.set(.25,.25,.25);
//     bloom.mesh.position.y = 100;
//     scene.add(bloom.mesh);
//   }
//
//   function loop(){
//
//     var newTime = Date.now();
//     var deltaTime = newTime-oldTime;
//     oldTime = newTime;
//
//     ambientLight.intensity += (.5 - ambientLight.intensity)*deltaTime*0.005;
//
//     renderer.clear();
//     renderer.render(scene, camera);
//
//     requestAnimationFrame(loop);
//   }
//
//   function normalize(v,vmin,vmax,tmin, tmax){
//     var nv = Math.max(Math.min(v,vmax), vmin);
//     var dv = vmax-vmin;
//     var pc = (nv-vmin)/dv;
//     var dt = tmax-tmin;
//     var tv = tmin + (pc*dt);
//     return tv;
//   }
//
//   function loadJSON(meshData, callback, onerror){
//     var loader1 = new THREE.JSONLoader();
//     loader1.load(meshData.url, function(geom) {
//       var mat = new THREE.MeshPhongMaterial({
//         color:meshData.color,
//         shininess: 100,
//         wireframe: true,
//         // shading:THREE.FlatShading
//       });
//       callback(new THREE.Mesh(geom, mat));
//     }, undefined, function(){
//       if (onerror) {
//         onerror();
//       }
//     });
//   }
//
//   function loadJSONFiles(meshes, callback, onerror){
//     if (meshes && callback) {
//       var obj = new THREE.Object3D();
//       if (meshes.length > 0) {
//         var count = 0;
//         var addMesh = function(mesh) {
//           obj.add(mesh);
//           mesh.castShadow = true;
//           mesh.receiveShadow = true;
//           if (++count === meshes.length) callback(obj);
//         };
//         for (var i = 0; i < meshes.length; i++) {
//           loadJSON(meshes[i], addMesh, onerror);
//         }
//       }
//       else {
//         callback(obj);
//       }
//     }
//   }
//
//   function start() {
//
//       createScene();
//
//       letThereBeLights();
//       createBloom();
//
//       // container.addEventListener('mousedown', handleMouseDown, false);
//       container.addEventListener('touchstart', handleTouchStart, false);
//       document.addEventListener('mousemove', handleMouseMove, false);
//       document.addEventListener('touchmove', handleTouchMove, false);
//       // document.addEventListener('mouseup', handleMouseUp, false);
//       document.addEventListener('touchend', handleTouchEndCancel, false);
//       document.addEventListener('touchcancel', handleTouchEndCancel, false);
//
//       loop();
//   }
//
//   function init(event){
//
//     winSize.x = window.innerWidth;
//     winSize.y = window.innerHeight;
//
//     var mesh = [{ url:assetsPath+'/bloom.json', color:0xeeeeee }];
//
//     loadJSONFiles(mesh, function(obj) {
//       bloomMesh = obj;
//       bloomMesh.scale.set(10, 10, 10);
//       obj.rotation.x = defaultRotationX = .85;
//
//       start();
//     }, function(){
//       var geometry = new THREE.SphereGeometry( 12, 15, 15 );
//       var material = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe:true} );
//       bloomMesh = new THREE.Mesh( geometry, material );
//
//       start();
//     });
//   }
//
//   window.addEventListener('load', init, false);
//
// })();
