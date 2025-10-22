"use client";
import * as motion from "motion/react-client";
import { useState, useEffect, Suspense } from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { Canvas } from '@react-three/fiber'
import { Environment, Float, OrbitControls, Sparkles, Stage, useGLTF } from '@react-three/drei'

export default function ShadowWavesPage() {
  const waves = Array.from({ length: 3 }, (_, i) => i)
  const [open, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [snap, setSnap] = useState<number | string | null>(200)

  useEffect(() => {
    // Open drawer at 200px when last wave starts
    const openTimer = setTimeout(() => {
      setOpen(true)
      setSnap(0.6)
    }, 600) // Start of last wave (2 waves * 0.3s delay)

    // // Animate to 50% after last wave completes
    // const snapTimer = setTimeout(() => {
    //   setSnap(0.5)
    // }, 1200) // After last wave completes (600ms start + 600ms duration)

    return () => {
      clearTimeout(openTimer)
      // clearTimeout(snapTimer)
    }
  }, [])

  function Model() {
    // Load model with correct path based on environment for github pages
    const { scene } = useGLTF("/x-shop-demo/model.glb")
    return <primitive object={scene} castShadow />
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <motion.main className="flex min-h-dvh w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black dark:bg-black sm:items-start">
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center">
          {waves.map((index) => (
            <motion.div
              key={index}
              className="absolute bottom-0 w-full rounded-2xl blur-xl"
              style={{
                height: "100px",
                boxShadow: "0 0 80px 60px rgba(255, 255, 255, 0.6)",
                mixBlendMode: "normal",
                transformOrigin: "center bottom",
              }}
              initial={{
                scaleY: 0,
                opacity: 0.7,
              }}
              animate={{
                scaleY: [0, 4, 8],
                opacity: [0.4, 0.2, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: 0,
                delay: index * 0.3,
                ease: "easeIn",
              }}
            />
          ))}
        </div>

        <div className="absolute left-0 right-0 top-20 flex flex-col text-center items-center justify-center">
          <motion.h1 initial={{
            y: 20, opacity: 0
          }} animate={{
            y: 0, opacity: 1
          }} transition={{
            delay: 0.5, duration: 0.4
          }} className="text-4xl font-bold text-white/20">Sneaker Store</motion.h1>
          <motion.p initial={{
            y: 20, opacity: 0
          }} animate={{
            y: 0, opacity: 1
          }} transition={{
            delay: 0.7, duration: 0.4
          }} className="mt-6 px-6 text-sm text-white/20">
            Model Credits: "Adidas Yeezy Boost 350 V2" (skfb.ly/oFVHw) by Nyilonelycompany is licensed under Creative Commons Attribution.
          </motion.p>
        </div>
      </motion.main>

      <Drawer
        open={open}
        onOpenChange={setOpen}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
        snapPoints={[200, 0.5, 1]}
        dismissible={false}
        modal={false}
      >
        <DrawerContent className="bg-zinc-900 border-zinc-800 pb-40">
          <div className="mx-auto w-full max-w-sm p-6">
            <DrawerHeader className="px-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden "
              >
                <Canvas
                  camera={{ position: [0, 0.15, 0.3], fov: 50 }}
                  style={{ background: 'transparent' }}
                  gl={{ alpha: true }}
                  className="w-full h-full"
                >
                  <Suspense fallback={null}>
                    <Float
                      speed={1} // Animation speed, defaults to 1
                      rotationIntensity={4} // XYZ rotation intensity, defaults to 1
                      floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                      floatingRange={[-0.05, 0.05]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                    >
                      <Environment preset="warehouse" />
                      {/* <Stage environment="city" intensity={0.8} adjustCamera={true}> */}
                        <Model />
                      {/* </Stage> */}
                    </Float>
                    <Sparkles speed={0.01} size={0.1} />
                    <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} makeDefault />
                  </Suspense>
                </Canvas>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <DrawerTitle className="text-2xl text-white text-left">Banger Sneakers</DrawerTitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <DrawerDescription className="text-base mt-2 text-zinc-400 text-left">
                  Walk with confidence and style in our Banger Sneakers, designed for ultimate comfort and durability.
                </DrawerDescription>
              </motion.div>
            </DrawerHeader>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex items-center justify-between mt-6 mb-4"
            >
              <span className="text-sm font-medium text-white">Quantity</span>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent border-zinc-700 hover:bg-zinc-800 text-white"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-medium text-white">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent border-zinc-700 hover:bg-zinc-800 text-white"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Button className="w-full bg-white text-black hover:bg-zinc-200" size="lg">
                Buy Now - ${(299.99 * quantity).toFixed(2)}
              </Button>
            </motion.div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}