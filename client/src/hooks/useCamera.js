import { useState, useEffect, useRef } from 'react'

export function useCamera() {
    const videoRef = useRef(null)
    const canvasRef = useRef(null)
    const [photo, setPhoto] = useState(null)
    const [isVideoVisible, setIsVideoVisible] = useState(true)
    const [hasTakenPhoto, setHasTakenPhoto] = useState(false)

    useEffect(() => {
        enableCamera()

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks()
                tracks.forEach((track) => track.stop())
            }
        }
    }, [])

    const enableCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true })
            if (videoRef.current) {
                videoRef.current.srcObject = stream
            }
        } catch (e) {
            console.log(e)
        }
    }

    const takePhoto = () => {
        if (canvasRef.current && videoRef.current) {
            const canvas = canvasRef.current
            const video = videoRef.current

            canvas.width = video.videoWidth
            canvas.height = video.videoHeight

            const context = canvas.getContext("2d")
            context.drawImage(video, 0, 0, canvas.width, canvas.height)

            const imageData = canvas.toDataURL("image/png")
            setPhoto(imageData)

            setIsVideoVisible(false)
            setHasTakenPhoto(true)
        }
    }

    const retakePhoto = () => {
        setPhoto(null)
        setIsVideoVisible(true)
        enableCamera()
        setHasTakenPhoto(false)
    }

    return {
        videoRef,
        canvasRef,
        photo,
        takePhoto,
        retakePhoto,
        isVideoVisible,
        hasTakenPhoto
    }
}
