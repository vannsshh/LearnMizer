import React, { useEffect } from "react";
import * as THREE from "three";

const HeroAnimation = () => {
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
        renderer.domElement.style.position = "fixed";
        renderer.domElement.style.top = "0";
        renderer.domElement.style.left = "0";
        renderer.domElement.style.width = "100vw";
        renderer.domElement.style.height = "100vh";
        renderer.domElement.style.zIndex = "-1";
        renderer.domElement.style.opacity = "0.3";
        document.body.appendChild(renderer.domElement);

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

            const points = shape.getPoints();
            const geometry = new THREE.BufferGeometry().setFromPoints(points);

            const progress = new Float32Array(points.length);
            for (let i = 0; i < points.length; i++) {
                progress[i] = i / (points.length - 1);
            }
            geometry.setAttribute("lineProgress", new THREE.BufferAttribute(progress, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    baseColor: { value: new THREE.Color(0x808080) },
                    glowColor: { value: new THREE.Color(0xffffff) },
                    glowWidth: { value: 0.1 },
                    opacity: { value: 0.7 },
                    flowPosition: { value: -1 },
                    isHovered: { value: 0 },
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
        const spacingX = hexSize * Math.sqrt(8); // Proper hex spacing
        const spacingY = hexSize * 2.5; // Adjusted for grid alignment
        const rows = 6;
        const cols = 5;
        let index = 0;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const xOffset = (row % 2) * (spacingX / 2);
                const x = col * spacingX - (cols * spacingX) / 2 + xOffset;
                const y = row * spacingY - (rows * spacingY) / 2;
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
        const scrollSpeed = 0.02; // Adjust speed for smoother scrolling

        const animate = () => {
            requestAnimationFrame(animate);
            raycaster.setFromCamera(mouse, camera);

            hexagons.forEach(({ hexagon, material }) => {
                // Move hexagons downward
                hexagon.position.y -= scrollSpeed;

                // Reset hexagons to top when they move out of view
                if (hexagon.position.y < -(rows * spacingY) / 2) {
                    hexagon.position.y += rows * spacingY;
                }

                // Hover effect
                material.uniforms.isHovered.value = 0;
                material.uniforms.flowPosition.value = -1;
            });

            // Detect hover
            const intersects = raycaster.intersectObjects(hexagons.map(h => h.hexagon));
            if (intersects.length > 0) {
                const hoveredHex = intersects[0].object;
                const found = hexagons.find(h => h.hexagon === hoveredHex);
                if (found) {
                    found.material.uniforms.isHovered.value = 1;
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
            if (renderer.domElement) {
                document.body.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return null;
};

export default HeroAnimation;
