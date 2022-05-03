import * as THREE from 'three'
import Experience from "../Experience.js"

export default class Mellowtron
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug


        //Debug
        if(this.debug)
        {
            this.debugFolder = this.debug.ui.addFolder('Mellowtron')
        }
        //Setup
        this.resource = this.resources.items.mellowTron

        this.setModel()
      //   this.setAnimation()
        console.log(this.resources.items.mellowTron)
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(4, 4, 4)
        this.scene.add(this.model)

        this.model.traverse((child) =>
        {
            // console.log(child)
            
            if (child.name === 'Point')
            {
               const pointLight = new THREE.PointLight(
                    0x24DE00, 
                    10, 
                    6,
                    2
               )
               // const helper = new THREE.PointLightHelper(pointLight,0.1)
               child.add(pointLight)
               // this.scene.add(helper)
            }  
            if (child.name === 'Point.001')
            {
               const pointLight1 = new THREE.PointLight(
                    0x24DE00, 
                    10,
                    6,
                    2
               )
               child.add(pointLight1)
            } 
            if (child.name === 'Point.002')
            {
               const pointLight2 = new THREE.PointLight(
                    0x24DE00, 
                    10,
                    6,
                    2
               )
               child.add(pointLight2)
            } 
            if (child.name === 'Point.003')
            {
               const pointLight3 = new THREE.PointLight(
                    0x24DE00, 
                    10,
                    6,
                    2
               )
               child.add(pointLight3)
            } 
            if (child.name === 'Point.004')
            {
               const pointLight4 = new THREE.PointLight(
                    0x24DE00, 
                    10,
                    6,
                    2
               )
               child.add(pointLight4)
            } 
            if (child.name === 'Point.005')
            {
               const pointLight5 = new THREE.PointLight(
                    0x24DE00, 
                    10,
                    6,
                    2
               )
               child.add(pointLight5)
            } 
            if (child.name === 'green_light002')
            {
               const greenLight002 = new THREE.PointLight(
                    0x146600, 
                    10,
                    0,
                    2
                    
               )   
            //    const helper = new THREE.PointLightHelper(greenLight,0.1)
               child.add(greenLight002)
            //    this.scene.add(helper)
            }
            if (child.name === 'purple_light002')
            {
               const purpleLight002 = new THREE.PointLight(
                    0x442DF4, 
                    10
               )
               child.add(purpleLight002)
            }
            if (child.name === 'purple_light001')
            {
               const purpleLight001 = new THREE.PointLight(
                    0x442DF4, 
                    10
               )
               child.add(purpleLight001)
            }
            if (child.name === 'purple_light003')
            {
               const purpleLight003 = new THREE.PointLight(
                    0x442DF4, 
                    10
               )
               child.add(purpleLight003)
            }
            if (child.name === 'green_light003')
            {
               const greenLight003 = new THREE.PointLight(
                     0x144500, 
                     1, 
                     1
               )
               child.add(greenLight003)
            }
            if (child.name === 'green_light001')
            {
               const greenLight001 = new THREE.PointLight(
                     0x144500, 
                     1, 
                     1
               )
               child.add(greenLight001)
            }
            if (child.name === 'green_light004')
            {
               const greenLight004 = new THREE.PointLight(
                     0x144500, 
                     1,
                     1
               )
               child.add(greenLight004)
            }
            if (child.name === 'red_light001')
            {
               const redLight001 = new THREE.PointLight(
                     0xFF0800, 
                     10
               )
               child.add(redLight001)
            }
            if (child.name === 'red_light002')
            {
               const redLight002 = new THREE.PointLight(
                     0xFF0800, 
                     10
               )
               child.add(redLight002)
            }
            if (child.name === 'red_light003')
            {
               const redLight003 = new THREE.PointLight(
                     0xFF0800, 
                     10
               )
               child.add(redLight003)
            }
            if (child.name === 'red_light004')
            {
               const redLight004 = new THREE.PointLight(
                     0xFF0800, 
                     10
               )
               child.add(redLight004)
            }
            if (child.name === 'yellow_light001')
            {
               const yellowLight001 = new THREE.PointLight(
                    0xF3FF00, 
                    10
               )
               child.add(yellowLight001)
            }
            if (child.name === 'yellow_light002')
            {
               const yellowLight002 = new THREE.PointLight(
                     0xF3FF00, 
                     10
               )
               child.add(yellowLight002)
            }
            if (child.name === 'yellow_light003')
            {
               const yellowLight003 = new THREE.PointLight(
                     0xF3FF00, 
                     10
               )
               child.add(yellowLight003)
            }
            if (child.name === 'yellow_light004')
            {
               const yellowLight004 = new THREE.PointLight(
                     0xF3FF00, 
                     10
               )
               child.add(yellowLight004)
            }
            if (child.name === 'yellow_light005')
            {
               const yellowLight005 = new THREE.PointLight(
                     0xF3FF00, 
                     10
               )
               child.add(yellowLight005)
            }
            if (child.name === 'blue_light001')
            {
               const blueLight001 = new THREE.PointLight(
                     0x0822FF, 
                     10
               )
               child.add(blueLight001)
            }
            if (child.name === 'blue_light002')
            {
               const blueLight002 = new THREE.PointLight(
                     0x0822FF, 
                     10
               )
               child.add(blueLight002)
            }
            if (child.name === 'blue_light003')
            {
               const blueLight003 = new THREE.PointLight(
                     0x0822FF, 
                     10
               )
               child.add(blueLight003)
            }
            if (child.name === 'blue_light004')
            {
               const blueLight004 = new THREE.PointLight(
                     0x0822FF, 
                     10
               )
               child.add(blueLight004)
            }
            if (child.name === 'blue_light005')
            {
               const blueLight005 = new THREE.PointLight(
                     0x0822FF, 
                     10
               )
               child.add(blueLight005)
            }
            if (child.name === 'blue_light006')
            {
               const blueLight006 = new THREE.PointLight(
                     0x0822FF, 
                     10
               )
               child.add(blueLight006)
            }
            if (child.name === 'blue_light007')
            {
               const blueLight007 = new THREE.PointLight(
                     0x0822FF, 
                     10
               )
               child.add(blueLight007)
            }
            if (child.name === 'blue_light008')
            {
               const blueLight008 = new THREE.PointLight(
                     0x0822FF, 
                     10
               )
               child.add(blueLight008)
            }
            if (child.name === 'blue_light009')
            {
               const blueLight009 = new THREE.PointLight(
                    0x0822FF, 
                    10
               )
               child.add(blueLight009)
            }
            if (child instanceof THREE.Mesh)
            {
                child.castShadow = true
            }
        })
    }

   //  setAnimation()
   //  {
   //      this.animation = {}
   //      this.animation.mixer = new THREE.AnimationMixer(this.model)
        
   //      this.animation.action = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[0])
   //      this.animation.action1 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[1])
   //      this.animation.action2 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[2])
   //      this.animation.action3 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[3])
   //      this.animation.action4 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[4])
   //      this.animation.action5 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[5])




        // this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])
        // this.animation.actions.walking = this.animation.mixer.clipAction(this.resource.animations[1])
        // this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations[2])

        // this.animation.actions.fader1 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[0])
        // this.animation.actions.fader2 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[1])
        // this.animation.actions.fader3 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[2])
        // this.animation.actions.fader4 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[3])
        // this.animation.actions.fader5 = this.animation.mixer.clipAction(this.resources.items.mellowTron.animations[4])

        // this.resources.items.mellowTron.traverse(animations)
   //  {
   //      this.animation.action.play()
   //      this.animation.action1.play()
   //      this.animation.action2.play()
   //      this.animation.action3.play()
   //      this.animation.action4.play()
   //      this.animation.action5.play()



   //      // this.animation.action.update(deltaTime)
   //  }
        // this.animation.actions.current = this.animation.actions
        // this.animation.actions.current.play()

        // this.animation.play = (name) =>
        // {
        //     const newAction = this.animation.actions[name]
        //     const oldAction = this.animation.actions.current

        //     newAction.reset()
        //     newAction.play()
        //     newAction.crossFadeFrom(oldAction, 1)

        //     this.animation.actions.current = newAction
        // }


    //     //Debug
    //     if(this.debug.active)
    //     {
    //         const debugObject = {
    //             playIdle: () => {this.animation.play('idle')},
    //             playWalking: () => {this.animation.play('walking')},
    //             playRunning: () => {this.animation.play('running')}
    //         }
    //         this.debugFolder.add(debugObject, 'playIdle')
    //         this.debugFolder.add(debugObject, 'playWalking')
    //         this.debugFolder.add(debugObject, 'playRunning')

    //     }
   //  }

    update()
    {
      //   this.animation.mixer.update(this.time.delta * 0.001)
        // console.log(this.animation.action)
    }
}