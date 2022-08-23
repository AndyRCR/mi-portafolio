import React, { useContext } from 'react'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GlobalContext } from '../../context/GlobalStateContext'

const ThreeSphere = () => {

    const { theme } = useContext(GlobalContext)

    useEffect(() => {
        const loader = new THREE.FontLoader();
        const canvas = document.querySelector("canvas.webgl");
        const medida = document.querySelector(".threeContainer");
        const tecnologias = [
          "Javascript",
          "SASS",
          "React",
          "Vue.js",
          "Blender",
          "Node.js",
          "Express.js",
          "Git",
          "Firebase",
          "AWS RDS & S3",
          "Three.js",
          "MongoDB",
          "SQL",
          "Angular"
        ];
    
        const scene = new THREE.Scene();
    
        const sizes = {
          width: medida.clientWidth,
          height: medida.clientWidth,
        };
    
        const cursor = {
          mouseX: 0,
          mouseY: 0,
        };
    
        const camera = new THREE.PerspectiveCamera(
          50,
          sizes.width / sizes.height,
          0.1,
          1000
        );
        camera.position.z = 150;
        camera.lookAt(0, 0, 0);
        scene.add(camera);
    
        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          alpha: true,
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
    
        /**
         * Lights
         */
        const ambientLight = new THREE.AmbientLight();
        scene.add(ambientLight);
    
        /**
         * Objects
         */
    
        const group = new THREE.Group();
    
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(50),
          new THREE.MeshBasicMaterial({
            wireframe: true,
            visible: false,
            color: "#000",
          })
        );
    
        group.add(sphere);
    
        const textos = [];
    
        const textMaterial = new THREE.MeshBasicMaterial({ color: theme === 'light' ? "#000" : "#fff"});
        let loadCheck = false;
        for (let i = 0; i < tecnologias.length; i++) {
          loader.load(
            "/fonts/droid/droid_sans_mono_regular.typeface.json",
            (font) => {
              const textGeometry = new THREE.TextBufferGeometry(tecnologias[i], {
                font: font,
                size: Math.random() + 3,
                height: 0.1,
                curveSegments: 6,
              });
              textGeometry.center();
              loadCheck = true;
              const text = new THREE.Mesh(textGeometry, textMaterial);
              textos.push(text);
              group.add(textos[i]);
            }
          );
        }
    
        scene.add(group);
    
        canvas.addEventListener("mousemove", (evt) => {
          cursor.mouseX = (evt.clientX / canvas.clientWidth) * 2 - 1;
          cursor.mouseY = -((evt.clientY / canvas.clientHeight) * 2) + 1;
        });
    
        canvas.addEventListener("resize", () => {
          sizes.width = window.innerWidth;
          sizes.height = window.innerHeight;
    
          camera.aspect = sizes.width / sizes.height;
          camera.updateProjectionMatrix();
    
          renderer.setSize(sizes.width, sizes.height);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
    
        let out = false;
        let mouseEnter = false;
        canvas.addEventListener("mouseout", () => (out = true));
    
        canvas.addEventListener("mouseenter", () => {
          mouseEnter = true;
          out = false;
        });
    
        const textAnimation = (mesh, parent, i) => {
          mesh.position.set(
            parent.geometry.vertices[i].x,
            parent.geometry.vertices[i].y,
            parent.geometry.vertices[i].z
          );
        };
    
        const tick = () => {
          if (loadCheck) {
            for (let i = 0; i < textos.length; i++) {
              textos[i].lookAt(
                textos[i].position.x,
                textos[i].position.y,
                sphere.geometry.parameters.radius + 1000
              );
            }
    
            let vertex = 0;
            for (let i = 0; i < tecnologias.length; i++) {
              textAnimation(textos[i], sphere, vertex);
              vertex += 3;
              textos[i].rotation.setFromVector3(textos[0].rotation.toVector3());
            }
          }
    
          if (!mouseEnter) {
            group.rotation.y += 0.005;
            group.rotation.x += 0.005;
          } else {
            if (!out) {
              group.rotation.y += cursor.mouseX * 0.02/3;
              group.rotation.x -= cursor.mouseY * 0.02/3;
            } else {
              group.rotation.y += cursor.mouseX * 0.005/3;
              group.rotation.x -= cursor.mouseY * 0.005/3;
            }
          }
    
          renderer.render(scene, camera);
          requestAnimationFrame(tick);
        };
    
        tick();
    }, [theme])
    

  return (
    <canvas className="webgl" data-aos="zoom-in" data-aos-duration="2500"></canvas>
  )
}

export default ThreeSphere