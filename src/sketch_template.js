
import '@/styles/sketch_template.scss';

import * as THREE from 'three';

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
    }

    addMesh(){
        this.geometry = new THREE.PlaneBufferGeometry( 1, 1 );
	    this.material = new THREE.MeshNormalMaterial({ 
            side: THREE.DoubleSide,
            //wireframe: true
            });
        this.mesh = new THREE.Mesh( this.geometry, this.material );
	    this.scene.add( this.mesh );
    }

    render(time){     
        //this.mesh.rotation.x = time / 2000;
	    //this.mesh.rotation.y = time / 2000;
        this.renderer.render( this.scene, this.camera );
        window.requestAnimationFrame(this.render.bind(this));
    }
}

new Sketch();

