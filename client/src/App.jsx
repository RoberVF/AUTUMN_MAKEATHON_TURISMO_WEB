"use client"

import React, { useState } from "react"
import { Calendar, MapPin, MessageSquare } from "lucide-react"

// Componente Button
const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

// Componente Input
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

// Componente Card y subcomponentes
const Card = ({ className, ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
)
Card.displayName = "Card"

const CardHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
)
CardHeader.displayName = "CardHeader"

const CardTitle = ({ className, ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
)
CardTitle.displayName = "CardTitle"

const CardDescription = ({ className, ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props} />
)
CardDescription.displayName = "CardDescription"

const CardContent = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
)
CardContent.displayName = "CardContent"

const CardFooter = ({ className, ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
)
CardFooter.displayName = "CardFooter"

// Componente Tabs y subcomponentes
const Tabs = ({ defaultValue, ...props }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)
  return <div {...props} data-active-tab={activeTab} />
}

const TabsList = ({ className, ...props }) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`} {...props} />
)

const TabsTrigger = ({ value, className, ...props }) => {
  const isActive = React.useContext(TabsContext) === value
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
      {...props}
    />
  )
}

const TabsContent = ({ value, className, ...props }) => {
  const activeTab = React.useContext(TabsContext)
  if (activeTab !== value) return null
  return <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`} {...props} />
}

const TabsContext = React.createContext(null)

// Componente principal HotelApp
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