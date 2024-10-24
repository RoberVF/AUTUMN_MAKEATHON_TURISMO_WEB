"use client"

import React, { useEffect, useState } from "react"
import { Calendar, MapPin, MessageSquare } from "lucide-react"

import Button from './components/Button'
import Input from './components/Input'
import CardComponents from './components/Card'
const { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } = CardComponents

import TabsComponents from './components/Tabs'
const { Tabs, TabsList, TabsTrigger, TabsContent, TabsContext } = TabsComponents

export default function HotelApp() {
  const [activeTab, setActiveTab] = useState("check-in")
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleAskQuestion = async () => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:3000/chat', {
        method: 'POST',
        body: JSON.stringify({
          prompt: question
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = await res.json()
      setResponse(data.response)
      setAnswer(data.response[0]?.generated_text || "")
    } catch (e) {
      console.log("Ha ocurrido un error: ", e)
      setAnswer("Actualmente la IA se encuentra en mantenimiento, rogamos que nos disculpen")
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="h-screen bg-zinc-200">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">BIENVENIDO A KOALA GARDEN'S HOTEL</h1>
        <TabsContext.Provider value={activeTab}>
          <Tabs defaultValue="check-in" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="check-in" onClick={() => setActiveTab("check-in")}>Check-in</TabsTrigger>
              <TabsTrigger value="room" onClick={() => setActiveTab("room")}>Mi Habitación</TabsTrigger>
              <TabsTrigger value="ask" onClick={() => setActiveTab("ask")}>Preguntar</TabsTrigger>
            </TabsList>
            <TabsContent className="bg-zinc-300 rounded-lg" value="check-in">
              <Card>
                <CardHeader>
                  <CardTitle className="font-bold">CHECK-IN</CardTitle>
                  <CardDescription>Realice su check-in de forma rapida y sencilla</CardDescription>
                  <CardDescription>
                    No tienes reserva?  <span></span>
                    <a
                      href="https://www.hotelkoalagarden.com/es/index.html"
                      target="_blank"
                      className="text-blue-600"
                    >Click aqui</a>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nombre</label>
                    <Input className="bg-zinc-400 placeholder-zinc-700" id="name" placeholder="Ingrese su nombre" />
                  </div>
                  <span className="my-2"></span>
                  <div className="space-y-1">
                    <label htmlFor="reservation" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Número de Reserva</label>
                    <Input className="bg-zinc-400 placeholder-zinc-700" id="reservation" placeholder="Ingrese su número de reserva" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full"><Calendar className="mr-2 h-4 w-4" /> Realizar Check-in</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent className="bg-zinc-300 rounded-lg" value="room">
              <Card>
                <CardHeader>
                  <CardTitle>MI HABITACION</CardTitle>
                  <CardDescription>Encuentre informacion de utilidad sobre su habitacion</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="p-4 bg-zinc-400 border rounded-md flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Habitación 301</p>
                      <p className="text-sm text-zinc-700">Piso 3, Ala Este</p>
                    </div>
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="mt-4">
                    <p className="mt-4 text-lg font-bold">Respuesta generada por Inteligencia Artificial</p>
                    <p className="text-sm">Para llegar a su habitación, tome el ascensor hasta el 3er piso y gire a la derecha.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent className="bg-zinc-300 rounded-lg" value="ask">
              <Card>
                <CardHeader>
                  <CardTitle>PREGUNTAR A LA IA</CardTitle>
                  <CardDescription>Haga cualquier pregunta sobre el hotel o su estancia.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Input
                    className="bg-zinc-400 placeholder-zinc-700"
                    placeholder="Escriba su pregunta aquí"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                  <Button onClick={handleAskQuestion} className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" /> Preguntar
                  </Button>
                  {loading ? (
                    <div className="mt-4 p-4 bg-yellow-200 rounded-md">
                      <p className="font-semibold">Cargando...</p>
                    </div>
                  ) : (
                    answer && (
                      <div className="mt-4 p-4 bg-green-400 rounded-md">
                        <p className="font-semibold">Respuesta:</p>
                        <p>{answer}</p>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContext.Provider>
      </div>
    </div>

  )
}