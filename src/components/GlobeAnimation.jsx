import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const GlobeAnimation = ({ isTransitioning = false, targetCountry = null, onTransitionComplete }) => {
  const mountRef = useRef(null)
  const sceneRef = useRef(null)
  const globeRef = useRef(null)
  const rendererRef = useRef(null)
  const animationIdRef = useRef(null)

  // Coordonnées des pays
  const countries = {
    tunisia: { lat: 36.8, lon: 10.2, name: 'Tunisia 🇹🇳' },
    palestine: { lat: 31.9, lon: 35.2, name: 'Palestine 🇵🇸' },
    japan: { lat: 36.2, lon: 138.3, name: 'Japan 🇯🇵' },
    brazil: { lat: -14.2, lon: -51.9, name: 'Brazil 🇧🇷' },
    egypt: { lat: 26.8, lon: 30.8, name: 'Egypt 🇪🇬' }
  }

  // Conversion lat/lon vers position 3D
  const latLonToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (lon + 180) * (Math.PI / 180)
    const x = -(radius * Math.sin(phi) * Math.cos(theta))
    const z = radius * Math.sin(phi) * Math.sin(theta)
    const y = radius * Math.cos(phi)
    return new THREE.Vector3(x, y, z)
  }

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    rendererRef.current = renderer
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Globe creation
    const geometry = new THREE.SphereGeometry(1.5, 64, 64)
    
    // Texture avec continents
    const textureLoader = new THREE.TextureLoader()
    const earthTexture = createEarthTexture()
    
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      transparent: true,
      opacity: 0.9,
      emissive: 0x112244,
      emissiveIntensity: 0.2,
      shininess: 15
    })
    
    const globe = new THREE.Mesh(geometry, material)
    globeRef.current = globe
    scene.add(globe)

    // Atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.6, 64, 64)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.5, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Markers pour les pays
    Object.entries(countries).forEach(([key, country]) => {
      const markerGeometry = new THREE.SphereGeometry(0.03, 16, 16)
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: key === 'tunisia' ? 0xff0000 : key === 'palestine' ? 0x00ff00 : 0x9333ea,
        emissive: key === 'tunisia' ? 0xff0000 : key === 'palestine' ? 0x00ff00 : 0x9333ea,
        emissiveIntensity: 1
      })
      const marker = new THREE.Mesh(markerGeometry, markerMaterial)
      const position = latLonToVector3(country.lat, country.lon, 1.51)
      marker.position.copy(position)
      scene.add(marker)

      // Pulse animation pour les markers
      const pulseGeometry = new THREE.SphereGeometry(0.05, 16, 16)
      const pulseMaterial = new THREE.MeshBasicMaterial({
        color: key === 'tunisia' ? 0xff0000 : key === 'palestine' ? 0x00ff00 : 0x9333ea,
        transparent: true,
        opacity: 0.3
      })
      const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial)
      pulse.position.copy(position)
      pulse.userData = { baseScale: 1, pulseSpeed: Math.random() * 0.02 + 0.01 }
      scene.add(pulse)
    })

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 3, 5)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0x9333ea, 0.5)
    pointLight2.position.set(-5, -3, -5)
    scene.add(pointLight2)

    // Stars background
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.8
    })
    const starsVertices = []
    for (let i = 0; i < 1000; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20
      starsVertices.push(x, y, z)
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Animation
    let rotationSpeed = 0.002
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Rotation du globe
      globe.rotation.y += rotationSpeed
      atmosphere.rotation.y += rotationSpeed * 0.95

      // Animation des pulses
      scene.children.forEach(child => {
        if (child.userData.baseScale) {
          const scale = child.userData.baseScale + Math.sin(Date.now() * child.userData.pulseSpeed) * 0.3
          child.scale.set(scale, scale, scale)
          child.material.opacity = 0.3 + Math.sin(Date.now() * child.userData.pulseSpeed) * 0.2
        }
      })

      // Rotation lente des étoiles
      stars.rotation.y += 0.0001

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  // Transition animation effect
  useEffect(() => {
    if (isTransitioning && targetCountry && globeRef.current) {
      animateTransition(targetCountry)
    }
  }, [isTransitioning, targetCountry])

  const animateTransition = async (country) => {
    const route = ['tunisia', 'palestine', country.toLowerCase()]
    
    for (let i = 0; i < route.length - 1; i++) {
      await rotateToCountry(route[i + 1])
      await new Promise(resolve => setTimeout(resolve, 800))
    }

    if (onTransitionComplete) {
      setTimeout(() => onTransitionComplete(), 1000)
    }
  }

  const rotateToCountry = (countryKey) => {
    return new Promise((resolve) => {
      const country = countries[countryKey]
      if (!country || !globeRef.current) {
        resolve()
        return
      }

      const targetLon = -country.lon * (Math.PI / 180)
      const startRotation = globeRef.current.rotation.y
      const duration = 1500
      const startTime = Date.now()

      const animateRotation = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3) // Ease out cubic

        globeRef.current.rotation.y = startRotation + (targetLon - startRotation) * eased

        if (progress < 1) {
          requestAnimationFrame(animateRotation)
        } else {
          resolve()
        }
      }

      animateRotation()
    })
  }

  // Créer texture de la Terre
  function createEarthTexture() {
    const canvas = document.createElement('canvas')
    canvas.width = 2048
    canvas.height = 1024
    const ctx = canvas.getContext('2d')

    // Océans
    ctx.fillStyle = '#0a1929'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Continents simplifiés
    ctx.fillStyle = '#1a3a52'
    
    // Afrique
    ctx.beginPath()
    ctx.ellipse(1050, 550, 180, 280, 0, 0, Math.PI * 2)
    ctx.fill()

    // Asie
    ctx.beginPath()
    ctx.ellipse(1400, 400, 300, 250, 0, 0, Math.PI * 2)
    ctx.fill()

    // Europe
    ctx.beginPath()
    ctx.ellipse(1100, 350, 120, 100, 0, 0, Math.PI * 2)
    ctx.fill()

    // Amérique du Sud
    ctx.beginPath()
    ctx.ellipse(450, 700, 150, 200, -0.3, 0, Math.PI * 2)
    ctx.fill()

    // Amérique du Nord
    ctx.beginPath()
    ctx.ellipse(350, 350, 200, 180, 0, 0, Math.PI * 2)
    ctx.fill()

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full"
      style={{ minHeight: '400px' }}
    />
  )
}

export default GlobeAnimation
