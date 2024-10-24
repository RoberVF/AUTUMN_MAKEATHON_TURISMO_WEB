"use client"

import React, { useState } from "react"
import { Calendar, MapPin, MessageSquare } from "lucide-react"

import Button from './components/Button'
import Input from './components/Input'
import CardComponents from './components/Card'
const {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} = CardComponents

import TabsComponents from './components/Tabs'
const { Tabs, TabsList, TabsTrigger, TabsContent, TabsContext } = TabsComponents

export default function HotelApp() {
  const [activeTab, setActiveTab] = useState("check-in")
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleAskQuestion = () => {
    setAnswer("Lo siento, la IA está en mantenimiento. Por favor, contacte a recepción para cualquier consulta.")
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Bienvenido a nuestro Hotel</h1>
      <TabsContext.Provider value={activeTab}>
        <Tabs defaultValue="check-in" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="check-in" onClick={() => setActiveTab("check-in")}>Check-in</TabsTrigger>
            <TabsTrigger value="room" onClick={() => setActiveTab("room")}>Mi Habitación</TabsTrigger>
            <TabsTrigger value="ask" onClick={() => setActiveTab("ask")}>Preguntar</TabsTrigger>
          </TabsList>
          <TabsContent value="check-in">
            <Card>
              <CardHeader>
                <CardTitle>Check-in</CardTitle>
                <CardDescription>Realice su check-in de forma rápida y sencilla.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Nombre</label>
                  <Input id="name" placeholder="Ingrese su nombre" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="reservation" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Número de Reserva</label>
                  <Input id="reservation" placeholder="Ingrese su número de reserva" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full"><Calendar className="mr-2 h-4 w-4" /> Realizar Check-in</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="room">
            <Card>
              <CardHeader>
                <CardTitle>Mi Habitación</CardTitle>
                <CardDescription>Encuentre información sobre su habitación.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="p-4 border rounded-md flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Habitación 301</p>
                    <p className="text-sm text-gray-500">Piso 3, Ala Este</p>
                  </div>
                  <MapPin className="h-6 w-6 text-blue-500" />
                </div>
                <p className="text-sm">Para llegar a su habitación, tome el ascensor hasta el 3er piso y gire a la derecha.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ask">
            <Card>
              <CardHeader>
                <CardTitle>Preguntar a la IA</CardTitle>
                <CardDescription>Haga cualquier pregunta sobre el hotel o su estancia.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Input
                  placeholder="Escriba su pregunta aquí"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <Button onClick={handleAskQuestion} className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" /> Preguntar
                </Button>
                {answer && (
                  <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <p className="font-semibold">Respuesta:</p>
                    <p>{answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </TabsContext.Provider>
    </div>
  )
}