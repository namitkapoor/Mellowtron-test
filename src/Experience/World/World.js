import Experience from "../Experience.js"
import * as THREE from 'three'
import Environment from "./Environment.js"
import Floor from "./Floor.js"
import Fox from "./Fox.js"
import Mellowtron from "./mellowtron.js"

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        //Test mesh
        // const testMesh = new THREE.Mesh(
        //     new THREE.BoxGeometry(1,1,1),
        //     new THREE.MeshStandardMaterial({wireframe: false})
        // )
        // this.scene.add(testMesh)
        
        //Fox

        //Wait for resources
        this.resources.on('ready', () =>
        {
            //Setup 
            this.floor = new Floor()
            // this.fox = new Fox()
            this.model = new Mellowtron()
            this.environment = new Environment()
        })

        
        // console.log('World!')
    }

    update()
    {
        if(this.model)
            this.model.update()
    }
}