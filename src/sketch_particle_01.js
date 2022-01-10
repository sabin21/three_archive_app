
import '@/styles/sketch_template.scss';

import * as THREE from 'three';
import vertexShader from'./shaders/img_particle/vertexShader.glsl';
import fragmentShader from'./shaders/img_particle/fragmentShader.glsl';

export default class Sketch{
    constructor(){

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight );
        document.getElementById('container').appendChild( this.renderer.domElement );

        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        this.camera.position.z = 1;
        this.scene = new THREE.Scene();
        this.addMesh();
        this.render();
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }
    get viewport(){
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;
        return {
          width,
          height,
          aspectRatio
        };
    }
    addMesh(){
        this.geometry = new THREE.PlaneBufferGeometry( 1, 1, 10, 10 );
	    
        this.material = new THREE.ShaderMaterial({
            fragmentShader: fragmentShader,
            vertexShader: vertexShader,
            uniforms:{
                progress: { type:'f', value:0 }
            },
            side: THREE.DoubleSide
        })
        this.mesh = new THREE.Points( this.geometry, this.material );
	    this.scene.add( this.mesh );
    }

    render(time){     
        this.mesh.rotation.x = time / 2000;
	    this.mesh.rotation.y = time / 2000;
        this.renderer.render( this.scene, this.camera );
        window.requestAnimationFrame(this.render.bind(this));
    }
    onWindowResize(){
        this.camera.aspect = this.viewport.aspectRatio; // readjust the aspect ratio.
        this.camera.updateProjectionMatrix(); // Used to recalulate projectin dimensions.
        this.renderer.setSize(this.viewport.width, this.viewport.height);  
    }
}

new Sketch();

