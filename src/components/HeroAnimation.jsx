import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const HeroAnimation = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.top = "0";
        renderer.domElement.style.left = "0";
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.zIndex = "-1";
        renderer.domElement.style.opacity = "0.3";
        mountRef.current.appendChild(renderer.domElement);

        // Custom Shader Material for water-flow glow effect
        function createHexagon(radius, x, y, index) {
            const shape = new THREE.Shape();
            for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3;
                const xPos = radius * Math.cos(angle);
                const yPos = radius * Math.sin(angle);
                if (i === 0) {
                    shape.moveTo(xPos, yPos);
                } else {
                    shape.lineTo(xPos, yPos);
                }
            }
            shape.closePath();

            // Create geometry from shape points
            const points = shape.getPoints();
            const geometry = new THREE.BufferGeometry().setFromPoints(points);

            // Add a custom attribute for progress along the line (0 to 1)
            const progress = new Float32Array(points.length);
            for (let i = 0; i < points.length; i++) {
                progress[i] = i / (points.length - 1);
            }
            geometry.setAttribute("lineProgress", new THREE.BufferAttribute(progress, 1));

            // Create a ShaderMaterial for the glowing effect
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    baseColor: { value: new THREE.Color(0x808080) },
                    glowColor: { value: new THREE.Color(0xffffff) },
                    glowWidth: { value: 0.1 },
                    opacity: { value: 0.7 },
                    flowPosition: { value: -1 }, // -1 indicates no glow active
                    isHovered: { value: 0 }, // 0: not hovered, 1: hovered
                },
                vertexShader: `
          attribute float lineProgress;
          varying float vLineProgress;
          void main() {
            vLineProgress = lineProgress;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
                fragmentShader: `
          uniform vec3 baseColor;
          uniform vec3 glowColor;
          uniform float glowWidth;
          uniform float flowPosition;
          uniform int isHovered;
          varying float vLineProgress;
          void main() {
            vec3 color = baseColor;
            if (isHovered == 1 && flowPosition >= 0.0) {
              // Calculate how close this fragment is to the glow's center
              float dist = abs(vLineProgress - flowPosition);
              float glowFactor = smoothstep(glowWidth, 0.0, dist);
              color = mix(baseColor, glowColor, glowFactor);
            }
            gl_FragColor = vec4(color, 1.0);
          }
        `,
                transparent: true,
            });

            const hexagon = new THREE.LineLoop(geometry, material);
            hexagon.position.set(x, y, 0);
            hexagon.userData.index = index;

            return { hexagon, material };
        }

        // Create a grid of hexagons
        const hexagons = [];
        const hexSize = 3;
        const rows = 2.3;
        const cols = 3.5;
        const spacing = hexSize * 2.8;
        let index = 0;
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const xOffset = (row % 2) * (spacing / 2);
                const x = col * spacing - (cols * spacing) / 2 + xOffset;
                const y = row * (spacing * 0.85) - (rows * spacing * 0.85) / 2;
                const { hexagon, material } = createHexagon(hexSize, x, y, index);
                scene.add(hexagon);
                hexagons.push({ hexagon, material });
                index++;
            }
        }

        // Raycaster for mouse hover detection
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", onMouseMove);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            raycaster.setFromCamera(mouse, camera);

            // Reset all hexagons to non-hovered state
            hexagons.forEach(({ material }) => {
                material.uniforms.isHovered.value = 0;
                material.uniforms.flowPosition.value = -1;
            });

            // Check for intersections with the hexagons
            const intersects = raycaster.intersectObjects(hexagons.map(h => h.hexagon));
            if (intersects.length > 0) {
                const hoveredHex = intersects[0].object;
                // Update only the hovered hexagon to animate the glow effect
                const found = hexagons.find(h => h.hexagon === hoveredHex);
                if (found) {
                    found.material.uniforms.isHovered.value = 1;
                    // Animate the flowPosition uniform (cycles from 0 to 1)
                    found.material.uniforms.flowPosition.value = ((performance.now() % 1000) / 1000);
                }
            }

            renderer.render(scene, camera);
        };

        animate();

        // Handle Window Resize
        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", onMouseMove);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="hexagon-background" />;
};

export default HeroAnimation;
