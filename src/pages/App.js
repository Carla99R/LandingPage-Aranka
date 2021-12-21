import styles from '../styles/Home.module.css'
import Navbar from "../components/appBar";
import Info from "../components/Info";
import React, {useEffect, useState} from "react";
import Promotions from "../components/Promotions";
import Contact from "../components/Contact";
import Location from "../components/Location";

export default function Home() {
    let listener = null
    const [scrollState, setScrollState] = useState(false)

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 1) {
                setScrollState(true)
            } else {
                setScrollState(false)
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])

    useEffect(() => {
        fondo()
    }, [])

    function fondo() {
        let canvas = document.createElement('canvas');
        console.log(canvas)
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let segundo_p = document.getElementById('root').getElementsByTagName('div')[0];
        document.getElementById("root").insertBefore(canvas, segundo_p);
        let gl = canvas.getContext('webgl');

        let mouse = {x: 0, y: 0};

        let numMetaballs = 40;
        let metaballs = [];

        for (let i = 0; i < numMetaballs; i++) {
            let radius = Math.random() * 60 + 10;
            metaballs.push({
                x: Math.random() * (width - 2 * radius) + radius,
                y: Math.random() * (height - 2 * radius) + radius,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                r: radius * 0.75
            });
        }

        let vertexShaderSrc = `
attribute vec2 position;

void main() {
// position specifies only x and y.
// We set z to be 0.0, and w to be 1.0
gl_Position = vec4(position, 0.0, 1.0);
}
`;

        let fragmentShaderSrc = `
precision highp float;

const float WIDTH = ` + (width >> 0) + `.0;
const float HEIGHT = ` + (height >> 0) + `.0;

uniform vec3 metaballs[` + numMetaballs + `];

void main(){
float x = gl_FragCoord.x;
float y = gl_FragCoord.y;

float sum = 0.0;
for (int i = 0; i < ` + numMetaballs + `; i++) {
vec3 metaball = metaballs[i];
float dx = metaball.x - x;
float dy = metaball.y - y;
float radius = metaball.z;

sum += (radius * radius) / (dx * dx + dy * dy);
}

if (sum >= 0.99) {
gl_FragColor = vec4(mix(vec3(x / WIDTH, y / HEIGHT, 1.0), vec3(0, 0, 0), max(0.0, 1.0 - (sum - 0.99) * 100.0)), 1.0);
return;
}

gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}

`;

        let vertexShader = compileShader(vertexShaderSrc, gl.VERTEX_SHADER);
        let fragmentShader = compileShader(fragmentShaderSrc, gl.FRAGMENT_SHADER);

        let program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        let vertexData = new Float32Array([
            -1.0, 1.0, // top left
            -1.0, -1.0, // bottom left
            1.0, 1.0, // top right
            1.0, -1.0, // bottom right
        ]);
        let vertexDataBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

        let positionHandle = getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionHandle);
        gl.vertexAttribPointer(positionHandle,
            2, // position is a vec2
            gl.FLOAT, // each component is a float
            gl.FALSE, // don't normalize values
            2 * 4, // two 4 byte float components per vertex
            0 // offset into each span of vertex data
        );

        let metaballsHandle = getUniformLocation(program, 'metaballs');

        loop();

        function loop() {
            for (let i = 0; i < numMetaballs; i++) {
                let metaball = metaballs[i];
                metaball.x += metaball.vx;
                metaball.y += metaball.vy;

                if (metaball.x < metaball.r || metaball.x > width - metaball.r) metaball.vx *= -1;
                if (metaball.y < metaball.r || metaball.y > height - metaball.r) metaball.vy *= -1;
            }

            let dataToSendToGPU = new Float32Array(3 * numMetaballs);
            for (let i = 0; i < numMetaballs; i++) {
                let baseIndex = 3 * i;
                let mb = metaballs[i];
                dataToSendToGPU[baseIndex + 0] = mb.x;
                dataToSendToGPU[baseIndex + 1] = mb.y;
                dataToSendToGPU[baseIndex + 2] = mb.r;
            }
            gl.uniform3fv(metaballsHandle, dataToSendToGPU);

            //Draw
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

            requestAnimationFrame(loop);
        }

        function compileShader(shaderSource, shaderType) {
            let shader = gl.createShader(shaderType);
            gl.shaderSource(shader, shaderSource);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
            }

            return shader;
        }

        function getUniformLocation(program, name) {
            let uniformLocation = gl.getUniformLocation(program, name);
            if (uniformLocation === -1) {
                throw 'Can not find uniform ' + name + '.';
            }
            return uniformLocation;
        }

        function getAttribLocation(program, name) {
            let attributeLocation = gl.getAttribLocation(program, name);
            if (attributeLocation === -1) {
                throw 'Can not find attribute ' + name + '.';
            }
            return attributeLocation;
        }

        canvas.onmousemove = function (e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }
        // canvas = canvasRender;
        // return canvasRender;
    }


    return (
        <>
            <div className={styles.container}>
                <Navbar scroll={scrollState}/>
                <span className={styles.title}>ARANKA IMPRESORES</span>
            </div>
            <Promotions/>
            <Info/>
            <Contact/>
            <Location/>
        </>


    )
}
