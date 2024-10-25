import {useState} from 'react'

function useCheckIn(){
    const [name, setName] = useState("")
    const [reservation, setReservation] = useState("")
    const [room, setRoom] = useState("")
    const [checkInComplete, setCheckInComplete] = useState("")

    const handleCheckIn = () => {
        const assignedRoom = "301, Ala Este"

        setRoom(assignedRoom)
        setCheckInComplete(true)
    }

    return [
        name, setName,
        reservation, setReservation,
        room, checkInComplete,
        handleCheckIn
    ]
    
}

export default useCheckIn